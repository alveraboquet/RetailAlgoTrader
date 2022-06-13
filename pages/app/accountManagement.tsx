import LayoutApp from '../../components/layout/layoutApp';
import { useEffect, useState } from 'react';
import { getSession, useSession } from 'next-auth/react';
import { NextPageContext } from 'next';
import {
  formatAmountFromStripe,
  formatAmountForDisplay,
} from '../../lib/stripeHelpers';
import {
  displayAlert,
  fetchAccountDetails,
  fetchStripeDetails,
  changeAccountInfo,
} from '../../lib/accountManagementHelpers';
import DOMPurify from 'isomorphic-dompurify';
import CheckBeforeDeleteModal from '../../components/accountManagement/checkBeforeDeleteModal';
import ErrorModal from '../../components/accountManagement/errorModal';

/**
 *
 * @returns - page for managing and changing account information
 */
const AccountManagement = () => {
  const { data: session } = useSession();
  const userId = session?.user.id;
  const [accountDetails, setAccountDetails] = useState({
    name: 'Loading',
    email: 'Loading',
    provider: 'Loading',
  });
  const [lastFour, setLastFour] = useState('Loading');
  const [subscription, setSubscription] = useState('Loading');
  const [price, setPrice] = useState(0);
  const [accountSettingsChange, setAccountSettingsChange] = useState(false);

  // Fetch content from protected routes with custom header
  useEffect(() => {
    fetchAccountDetails().then((accountDetails) =>
      setAccountDetails(accountDetails)
    );
    fetchStripeDetails().then((stripeDetails) => {
      setLastFour(stripeDetails.lastFour);
      setSubscription(stripeDetails.subscription);
      setPrice(stripeDetails.price);
    });
  }, [session]);

  // Display alert banner if account details could not be retrieved
  useEffect(() => {
    if (accountDetails.name === 'Failed to Retrieve') {
      displayAlert(
        'accountAlertPlaceholder',
        'Unable to retrieve account information. Try refreshing the page. If this issue continues please email contact@retailalgotrader.com'
      );
    }
  }, [accountDetails]);

  // Display alert banner if billing details could not be retrieved
  useEffect(() => {
    if (lastFour === 'Failed to Retrieve') {
      displayAlert(
        'billingAlertPlaceholder',
        'Unable to retrieve billing information. Try refreshing the page. If this issue continues please email contact@retailalgotrader.com'
      );
    }
  }, [lastFour]);

  // Handle form submit for user changing account information
  const handleAccountInfoChange = async (e: React.FormEvent) => {
    e.preventDefault();
    const formValidation = (await import('../../lib/formValidation')).default;
    const validated = formValidation(e);
    if (validated) {
      const validInput = await changeAccountInfo(e);
      if (validInput) {
        fetchAccountDetails().then((data) => setAccountDetails(data));
        setAccountSettingsChange(false);
      } else {
        displayAlert(
          'accountAlertPlaceholder',
          'Invalid input. Name can only consist of letters and must be less than 20 characters. Email must be of form johnsmith@email.com and must be less than 200 characters.'
        );
      }
    }
  };

  return (
    <LayoutApp>
      {typeof session?.user.id === 'string' ? (
        <CheckBeforeDeleteModal confirmationString={session.user.id} />
      ) : (
        <ErrorModal />
      )}
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
              placeholder={DOMPurify.sanitize(accountDetails.name)}
              maxLength={20}
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
              placeholder={DOMPurify.sanitize(accountDetails.email)}
              maxLength={200}
              onChange={() => {
                setAccountSettingsChange(true);
              }}
            />
            <div className="invalid-feedback">
              Please ensure email is of form johnsmith@email.com
            </div>
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
              placeholder={DOMPurify.sanitize(accountDetails.provider)}
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
              onClick={() => {
                setAccountSettingsChange(false);
                (
                  document.getElementById('accountSettings') as HTMLFormElement
                ).reset();
              }}
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
              <button
                type="submit"
                className="btn btn-danger"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
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
              data-bs-toggle="modal"
              data-bs-target="#deleteConfirmModal"
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
