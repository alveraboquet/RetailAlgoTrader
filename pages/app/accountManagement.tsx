import LayoutApp from '../../components/layout/layoutApp';
import { useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import {
  formatAmountFromStripe,
  formatAmountForDisplay,
} from '../../lib/stripeHelpers';
import alert from '../../lib/alert';
import { useRouter } from 'next/router';

const AccountManagement = () => {
  const { data: session } = useSession();
  const [accountDetails, setAccountDetails] = useState({
    name: 'Loading',
    email: 'Loading',
    provider: 'Loading',
  });
  const [lastFour, setLastFour] = useState('Loading');
  const [subscription, setSubscription] = useState('Loading');
  const [price, setPrice] = useState(0);
  const [accountSettingsChange, setAccountSettingsChange] = useState(false);
  const router = useRouter();

  const fetchAccountDetails = async () => {
    try {
      const res = await fetch('/api/app/user/retrieveAccountDetails', {
        headers: {
          'X-Custom-Header': 'lollipop',
        },
      });
      const data = await res.json();
      if (data) {
        setAccountDetails(data);
        return;
      }
      setAccountDetails({
        name: 'Failed to Retrieve',
        email: 'Failed to Retrive',
        provider: 'Failed to Retrive',
      });
    } catch (err) {
      setAccountDetails({
        name: 'Failed to Retrieve',
        email: 'Failed to Retrive',
        provider: 'Failed to Retrive',
      });
      const accountAlertPlaceholder = document.getElementById(
        'accountAlertPlaceholder'
      );
      if (!accountAlertPlaceholder) {
        return;
      } else {
        alert(
          'Unable to retrieve account information. Try refreshing the page. If this issue continues please email contact@retailalgotrader.com',
          'danger',
          accountAlertPlaceholder
        );
        return;
      }
    }
  };
  const fetchStripeDetails = async () => {
    try {
      const res = await fetch('/api/stripe/retrieveCustomer', {
        headers: {
          'X-Custom-Header': 'lollipop',
        },
      });
      if (res.status === 204) {
        setLastFour('Not a Paying Customer');
        setSubscription('Not a Paying Customer');
        setPrice(0);
        return;
      }
      if (res.status === 200) {
        const stripeData = await res.json();
        setLastFour(`···· ···· ···· ${stripeData.lastFour}`);
        setSubscription(stripeData.subscription);
        setPrice(stripeData.price);
        return;
      } else {
        throw new Error();
      }
    } catch (err) {
      setLastFour('Failed to Retrieve');
      setSubscription('Failed to Retrieve');
      setPrice(0);
      const billingAlertPlaceholder = document.getElementById(
        'billingAlertPlaceholder'
      );
      if (!billingAlertPlaceholder) {
        return;
      } else {
        alert(
          'Unable to retrieve billing information. Try refreshing the page. If this issue continues please email contact@retailalgotrader.com',
          'danger',
          billingAlertPlaceholder
        );
        return;
      }
    }
  };

  // Fetch content from protected routes with custom header
  useEffect(() => {
    fetchAccountDetails();
    fetchStripeDetails();
  }, [session]);

  const handleAccountInfoChange = async (event: React.FormEvent) => {
    event.preventDefault();
    const formValidation = (await import('../../lib/formValidation')).default;
    const validated = formValidation(event);
    if (validated) {
      type SignupDetails = EventTarget & {
        newName: HTMLInputElement;
        newEmail: HTMLInputElement;
        newProvider: HTMLInputElement;
      };
      const target = event.target as SignupDetails;
      // add error / timeout for fetch
      const res = await fetch('/api/app/user/changeAccountDetails', {
        method: 'PUT',
        headers: {
          'X-Custom-Header': 'lollipop',
        },
        body: JSON.stringify({
          newName: target.newName.value,
          newEmail: target.newEmail.value,
        }),
      });
      (event.target as HTMLFormElement).reset();
      const result = await res.json();
      setAccountSettingsChange(false);
      fetchAccountDetails();
    }
  };

  const handleDeleteAccount = async () => {
    try {
      await fetch('/api/stripe/deleteCustomer', {
        method: 'DELETE',
        headers: {
          'X-Custom-Header': 'lollipop',
        },
      });
      router.push('/');
    } catch (err) {
      console.log(err);
      const deleteAccountAlertPlaceholder = document.getElementById(
        'deleteAccountAlertPlaceholder'
      );
      if (!deleteAccountAlertPlaceholder) {
        return;
      } else {
        alert(
          'Unable to delete account information. Please try again. If this issue continues please email contact@retailalgotrader.com',
          'danger',
          deleteAccountAlertPlaceholder
        );
        return;
      }
    }
  };

  return (
    <LayoutApp>
      <h1>Account Management</h1>
      <hr />
      <h2 className="mb-4">Account Settings</h2>
      <form
        onSubmit={handleAccountInfoChange}
        className="form rounded"
        noValidate
        id="accountSettings"
      >
        <div className="row">
          <div className="col-3">
            <label htmlFor="newName" className="form-label">
              Name:
            </label>
          </div>
          <div className="col-3">
            <input
              id="newName"
              type="text"
              autoComplete="given-name"
              className="form-control"
              placeholder={accountDetails.name}
              onChange={() => {
                setAccountSettingsChange(true);
              }}
            />
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-3">
            <label htmlFor="newEmail" className="form-label">
              Email:
            </label>
          </div>
          <div className="col-3">
            <input
              id="newEmail"
              type="email"
              autoComplete="email"
              aria-describedby="emailHelp"
              className="form-control"
              placeholder={accountDetails.email}
              onChange={() => {
                setAccountSettingsChange(true);
              }}
            />
          </div>
        </div>
        <div className="row mt-4 mb-3">
          <div className="col-3">
            <label htmlFor="newProvider" className="form-label">
              Authorization Provider:
            </label>
          </div>
          <div className="col-3">
            <input
              id="newProvider"
              type="text"
              className="form-control"
              placeholder={accountDetails.provider}
              onChange={() => {
                setAccountSettingsChange(true);
              }}
            />
          </div>
        </div>
        <div id="accountAlertPlaceholder"></div>
        <div className="text-end">
          {accountSettingsChange ? (
            <button
              type="button"
              className="btn btn-light border me-3"
              onClick={() => setAccountSettingsChange(false)}
            >
              Cancel
            </button>
          ) : (
            <></>
          )}

          <button type="submit" className="btn btn-warning">
            Save
          </button>
        </div>
      </form>
      <hr />
      <h2 className="mb-4">Mail Settings</h2>
      <hr />
      <div className="row">
        <div className="col-8">
          <h2 className="mb-4">Billing Settings</h2>
        </div>
        <div className="col-4 text-end">
          <form method="POST" action="/api/stripe/createCustomerPortalSession">
            <button type="submit" className="btn btn-warning">
              Manage Billing
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="fw-bold">Active Subscription:</p>
        </div>
        <div className="col-4">
          <p className="fw-normal">
            {subscription} (
            {formatAmountForDisplay(
              formatAmountFromStripe(price, 'USD'),
              'USD'
            )}{' '}
            {subscription === 'Pro Subscription - Monthly' ? '/mo' : '/year'})
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <p className="fw-bold">Payment Method:</p>
        </div>
        <div className="col-4">
          <p className="fw-normal">{lastFour}</p>
        </div>
      </div>
      <div id="billingAlertPlaceholder"></div>
      <hr />
      <div className="border border-danger rounded p-2 text-danger mb-4">
        <h2 className="mb-4">Danger Zone</h2>
        <hr />
        <div className="row">
          <div className="col-8">
            <p className="fw-bold text-danger">Cancel Subscription:</p>
            <p>
              If you only want to change your subscription plan please click the
              &quot;Manage Billing&quot; button above.
            </p>
            <p>
              You will have access to the Pro content for the remainder of your
              billing period.
            </p>
          </div>
          <div className="col-4 text-end">
            <form
              method="POST"
              action="/api/stripe/createCustomerPortalSession"
            >
              <button type="submit" className="btn btn-danger">
                Cancel Subscription
              </button>
            </form>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-8">
            <p className="fw-bold text-danger">Delete Account:</p>
            <p>Any subscriptions will be immediately cancelled.</p>
            <p>
              Permanently deletes all user and billing information. This cannot
              be reversed.
            </p>
            <p>
              After your account is deleted you will be redirected to the
              homepage.
            </p>
            <div id="deleteAccountAlertPlaceholder"></div>
          </div>
          <div className="col-4 text-end">
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteAccount()}
            >
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </LayoutApp>
  );
};

export default AccountManagement;

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: { session },
  };
}
