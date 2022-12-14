import LayoutApp from '../../components/layout/layoutApp';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { authOptions } from '../api/auth/[...nextauth]';
import { unstable_getServerSession } from 'next-auth';
import { GetServerSideProps, NextPage } from 'next';
import {
  formatAmountFromStripe,
  formatAmountForDisplay,
} from '../../lib/stripeHelpers';
import {
  displayAlert,
  fetchAccountDetails,
  fetchStripeDetails,
  verifyAccountInfoChange,
} from '../../lib/accountManagementHelpers';
import CheckBeforeDeleteModal from '../../components/accountManagement/checkBeforeDeleteModal';
import ErrorModal from '../../components/accountManagement/errorModal';
import AccountInfoChangeForm from '../../components/accountManagement/accountInfoChangeForm';
import CreateCustomerPortalSessionForm from '../../components/accountManagement/createCustomerPortalSessionForm';
import ProSignupBanner from '../../components/pricing/proSignupBanner';

/**
 *
 * @returns - page for managing and changing account information
 */
const AccountManagement: NextPage = () => {
  const { data: session } = useSession();
  const [accountDetails, setAccountDetails] = useState({
    name: 'Loading',
    email: 'Loading',
  });
  const [lastFour, setLastFour] = useState('Loading');
  const [subscription, setSubscription] = useState('Loading');
  const [price, setPrice] = useState(0);
  const [isAccountSettingsChanged, setIsAccountSettingsChanged] =
    useState(false);

  // Fetch content from protected routes with custom header
  useEffect(() => {
    fetchAccountDetails().then((accountDetails) => {
      setAccountDetails(accountDetails);
    });
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
    const validInput = await verifyAccountInfoChange(e);
    if (validInput) {
      fetchAccountDetails().then((data) => setAccountDetails(data));
      setIsAccountSettingsChanged(false);
    } else {
      displayAlert(
        'accountAlertPlaceholder',
        'Invalid input. Name can only consist of letters and must be less than 20 characters. Email must be of form johnsmith@email.com and must be less than 200 characters.'
      );
    }
  };

  // Update isAccountSettingsChanged to true when input on AccountInfoChangeForm
  const setAccountSettingsChangeTrue = () => {
    setIsAccountSettingsChanged(true);
  };

  // Update isAccountSettingsChanged to false when input cleared on AccountInfoChangeForm
  const setAccountSettingsChangeFalse = () => {
    setIsAccountSettingsChanged(false);
  };

  return (
    <LayoutApp>
      {typeof session?.user.id === 'string' ? (
        <CheckBeforeDeleteModal confirmationString={session.user.id} />
      ) : (
        <ErrorModal />
      )}
      <div className="mt-3 mt-md-0">
        <ProSignupBanner isPro={session?.user.isPro} />
      </div>
      <h1>Account Management</h1>
      <hr />
      <h2 className="mb-4">Account Settings</h2>
      <AccountInfoChangeForm
        handleAccountInfoChange={handleAccountInfoChange}
        accountDetails={accountDetails}
        setAccountSettingsChangeTrue={setAccountSettingsChangeTrue}
        setAccountSettingsChangeFalse={setAccountSettingsChangeFalse}
        isAccountSettingsChanged={isAccountSettingsChanged}
      />
      <hr />
      <h2 className="mb-4">Mail Settings</h2>
      <p>No email service currently implemented.</p>
      <hr />
      <div className="row">
        <div className="col-6 col-md-8">
          <h2 className="mb-4">Billing Settings</h2>
        </div>
        <div className="col-6 col-md-4 text-end">
          <CreateCustomerPortalSessionForm
            buttonText="Manage Billing"
            buttonColor="btn-warning"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 ps-3 pe-3 ps-md-0 pe-md-0">
          <p className="fw-bold">Active Subscription:</p>
        </div>
        <div className="col-12 col-md-4">
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
        <div className="col-12 col-md-4 ps-3 pe-3 ps-md-0 pe-md-0">
          <p className="fw-bold">Payment Method:</p>
        </div>
        <div className="col-12 col-md-4">
          <p className="fw-normal">{lastFour}</p>
        </div>
      </div>
      <div id="billingAlertPlaceholder" className="mt-3"></div>
      <hr />
      <div className="border border-danger rounded p-2 text-danger mb-4">
        <h2 className="mb-4">Danger Zone</h2>
        <hr />
        <div className="row">
          <div className="col-12 col-md-8">
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
          <div className="col-12 col-md-4 text-center text-md-end">
            <CreateCustomerPortalSessionForm
              buttonText="Cancel Subscription"
              buttonColor="btn-danger"
            />
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-12 col-md-8">
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
            <div id="deleteAccountAlertPlaceholder" className="mt-3"></div>
          </div>
          <div className="col-12 col-md-4 text-center text-md-end">
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
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );

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
};
