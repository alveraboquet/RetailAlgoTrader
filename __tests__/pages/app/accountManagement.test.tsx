import { render, screen, within } from '@testing-library/react';
import AccountManagement from '../../../pages/app/accountManagement';
import { SessionProvider } from 'next-auth/react';
import userEvent from '@testing-library/user-event';
import server from '../../../mocks/server';
import networkErrorHandlers from '../../../mocks/networkErrorHandlers';
import { rest } from 'msw';

describe('<AccountManagement />', () => {
  describe('Account Settings Section', () => {
    test('renders header and footer correctly', () => {
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );

      const header = screen.getByRole('link', { name: /dashboard/i });
      const logoutButton = screen.getByRole('button', { name: /logout/i });
      const footer = screen.getByRole('heading', { name: /about us/i });

      expect(header).toBeInTheDocument();
      expect(logoutButton).toBeInTheDocument();
      expect(footer).toBeInTheDocument();
    });

    test('renders account settings section with correct initial data and handles input', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );

      const sectionHeader = screen.getByText(/account settings/i);
      let nameInput = await screen.findByPlaceholderText('testUser');
      let emailInput = await screen.findByPlaceholderText('testUser@email.com');
      const saveButton = screen.getByRole('button', { name: /save/i });
      let cancelButton = screen.queryByTestId('cancelAccountInfoChangeButton');

      expect(sectionHeader).toBeInTheDocument();
      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(saveButton).toBeDisabled();
      expect(cancelButton).not.toBeInTheDocument();

      // Enable save button and cancel button on new name input
      await user.type(nameInput, 'newTestUserName');
      expect(saveButton).toBeEnabled();
      cancelButton = screen.getByTestId('cancelAccountInfoChangeButton');
      expect(cancelButton).toBeInTheDocument();

      // Clear name input and disable save button when cancel button clicked
      await user.click(cancelButton);
      cancelButton = screen.queryByTestId('cancelAccountInfoChangeButton');
      expect(cancelButton).not.toBeInTheDocument();
      expect(saveButton).toBeDisabled();
      nameInput = await screen.findByPlaceholderText('testUser');
      expect(nameInput).toBeInTheDocument();

      // Enable save button and cancel button on new email input
      await user.type(emailInput, 'newTestUserEmail@email.com');
      expect(saveButton).toBeEnabled();
      cancelButton = screen.getByTestId('cancelAccountInfoChangeButton');
      expect(cancelButton).toBeInTheDocument();

      // Clear email input and disable save button when cancel button clicked
      await user.click(cancelButton);
      cancelButton = screen.queryByTestId('cancelAccountInfoChangeButton');
      expect(cancelButton).not.toBeInTheDocument();
      expect(saveButton).toBeDisabled();
      emailInput = await screen.findByPlaceholderText('testUser@email.com');
      expect(emailInput).toBeInTheDocument();
    });

    test('displays updated info after save button is clicked', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );
      let nameInput = await screen.findByPlaceholderText('testUser');
      let emailInput = await screen.findByPlaceholderText('testUser@email.com');
      const saveButton = screen.getByRole('button', { name: /save/i });

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(saveButton).toBeInTheDocument();

      await user.type(nameInput, 'updatedTestUser');
      await user.type(emailInput, 'updatedTestUser@email.com');
      await user.click(saveButton);

      server.use(
        rest.get('/api/app/user/retrieveAccountDetails', (req, res, ctx) => {
          return res(
            ctx.status(200),
            ctx.json({
              name: 'updatedTestUser',
              email: 'updatedTestUser@email.com',
            })
          );
        })
      );

      nameInput = await screen.findByPlaceholderText('updatedTestUser');
      emailInput = await screen.findByPlaceholderText(
        'updatedTestUser@email.com'
      );

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
    });

    test('displays original info if both fields are blank', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );
      let nameInput = await screen.findByPlaceholderText('testUser');
      let emailInput = await screen.findByPlaceholderText('testUser@email.com');
      const saveButton = screen.getByRole('button', { name: /save/i });

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(saveButton).toBeInTheDocument();

      await user.click(saveButton);

      nameInput = await screen.findByPlaceholderText('testUser');
      emailInput = await screen.findByPlaceholderText('testUser@email.com');

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
    });

    test('displays alert if fails to retrieve account info', async () => {
      server.use(...networkErrorHandlers);
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );
      const nameInput = await screen.findByPlaceholderText(
        'Failed to Retrieve'
      );
      const emailInput = await screen.findByPlaceholderText(
        'Failed to Retrieve'
      );
      const alert = await screen.findByText(
        'Unable to retrieve account information. Try refreshing the page. If this issue continues please email contact@retailalgotrader.com'
      );

      expect(nameInput).toBeInTheDocument();
      expect(emailInput).toBeInTheDocument();
      expect(alert).toBeInTheDocument();
    });

    test('displays alert if new name input has numbers', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );
      const nameInput = await screen.findByPlaceholderText('testUser');
      const saveButton = screen.getByRole('button', { name: /save/i });

      // should not accept numbers in the name input
      await user.type(nameInput, 'test2');
      await user.click(saveButton);
      const alert = await screen.findByRole('alert');
      const alertText = within(alert).getByText(
        'Invalid input. Name can only consist of letters and must be less than 20 characters. Email must be of form johnsmith@email.com and must be less than 200 characters.'
      );
      expect(alertText).toBeInTheDocument();
    });

    test('displays alert if new name input has @ symbol', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );
      const nameInput = await screen.findByPlaceholderText('testUser');
      const saveButton = screen.getByRole('button', { name: /save/i });

      // should not accept symbols in the name input
      await user.type(nameInput, 'test@fdsa');
      await user.click(saveButton);
      const alert = await screen.findByRole('alert');
      const alertText = within(alert).getByText(
        'Invalid input. Name can only consist of letters and must be less than 20 characters. Email must be of form johnsmith@email.com and must be less than 200 characters.'
      );
      expect(alertText).toBeInTheDocument();
    });

    test('new name input does not allow more than 20 characters', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );
      const nameInput = await screen.findByPlaceholderText('testUser');

      // should not accept symbols in the name input
      await user.type(nameInput, 'jdoqpdmfjdueidoapslejdufmejducjdks');
      expect(nameInput).toHaveValue('jdoqpdmfjdueidoapsle');
    });

    test('displays alerts if new email does not have @ and .com', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );
      const emailInput = await screen.findByPlaceholderText(
        'testUser@email.com'
      );
      const saveButton = screen.getByRole('button', { name: /save/i });

      await user.type(emailInput, 'testUser');
      await user.click(saveButton);

      const alert = await screen.findByRole('alert');
      const alertText = within(alert).getByText(
        'Invalid input. Name can only consist of letters and must be less than 20 characters. Email must be of form johnsmith@email.com and must be less than 200 characters.'
      );
      expect(alertText).toBeInTheDocument();
    });

    test('displays alerts if new email does not have .com', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );
      const emailInput = await screen.findByPlaceholderText(
        'testUser@email.com'
      );
      const saveButton = screen.getByRole('button', { name: /save/i });

      await user.type(emailInput, 'testUser@fda');
      await user.click(saveButton);

      const alert = await screen.findByRole('alert');
      const alertText = within(alert).getByText(
        'Invalid input. Name can only consist of letters and must be less than 20 characters. Email must be of form johnsmith@email.com and must be less than 200 characters.'
      );
      expect(alertText).toBeInTheDocument();
    });
  });

  describe('Billing Settings Section', () => {
    test('renders billing settings with correct initial data for pro user', async () => {
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: true,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );

      const sectionHeader = screen.getByText(/billing settings/i);
      const activeSubscription = await screen.findByText(
        /Pro Subscription - Monthly/i
      );
      const paymentMethod = await screen.findByText(/1234/i);
      const price = await screen.findByText(/\$10.00/i);
      const renewalPeriod = await screen.findByText(/\/mo/i);
      expect(sectionHeader).toBeInTheDocument();
      expect(activeSubscription).toBeInTheDocument();
      expect(paymentMethod).toBeInTheDocument();
      expect(price).toBeInTheDocument();
      expect(renewalPeriod).toBeInTheDocument();
    });

    test('renders billing settings with not paying customer message if not pro', async () => {
      server.use(
        rest.get('/api/stripe/retrieveCustomer', (req, res, ctx) => {
          return res(
            ctx.status(204),
            ctx.json({
              lastFour: 'Not a Paying Customer',
              subscription: 'Not a Paying Customer',
              price: 0,
            })
          );
        })
      );

      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );

      const activeSubscription = await screen.findAllByText(
        /not a paying customer/i
      );
      const price = await screen.findByText(/\$0.00/i);
      const renewalPeriod = await screen.findByText(/\/year/i);

      expect(activeSubscription).toHaveLength(2);
      expect(price).toBeInTheDocument();
      expect(renewalPeriod).toBeInTheDocument();
    });

    test('displays alert if no billing information returned', async () => {
      server.use(
        rest.get('/api/stripe/retrieveCustomer', (req, res, ctx) => {
          return res(
            ctx.status(500),
            ctx.json({
              lastFour: 'Failed to Retrieve',
              subscription: 'Failed to Retrieve',
              price: 0,
            })
          );
        })
      );

      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );

      const activeSubscription = await screen.findAllByText(
        /failed to retrieve/i
      );
      const price = await screen.findByText(/\$0.00/i);
      const renewalPeriod = await screen.findByText(/\/year/i);
      const alert = await screen.findByRole('alert');
      const alertText = within(alert).getByText(
        'Unable to retrieve billing information. Try refreshing the page. If this issue continues please email contact@retailalgotrader.com'
      );

      expect(activeSubscription).toHaveLength(2);
      expect(price).toBeInTheDocument();
      expect(renewalPeriod).toBeInTheDocument();
      expect(alert).toBeInTheDocument();
      expect(alertText).toBeInTheDocument();
    });
  });

  describe('Danger Zone', () => {
    test('renders danger zone', () => {
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );

      const dangerZoneTitle = screen.getByRole('heading', {
        name: /danger zone/i,
      });
      const cancelSubscriptionTitle = screen.getByText(/cancel subscription:/i);
      const cancelDeleteAccount = screen.getAllByText(/delete account/i);
      const cancelSubscriptionButton = screen.getByRole('button', {
        name: /cancel subscription/i,
      });
      const deleteAccountButton = screen.getByRole('button', {
        name: /delete account/i,
      });

      expect(dangerZoneTitle).toBeInTheDocument();
      expect(cancelSubscriptionTitle).toBeInTheDocument();
      // title, button, and modal button
      expect(cancelDeleteAccount).toHaveLength(3);
      expect(cancelSubscriptionButton).toBeInTheDocument();
      expect(deleteAccountButton).toBeInTheDocument();
    });

    test('renders checkBeforeDeleteModal when delete account button clicked', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 'testId',
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );

      const deleteAccountButton = screen.getByRole('button', {
        name: /delete account/i,
      });

      expect(deleteAccountButton).toBeInTheDocument();
      user.click(deleteAccountButton);

      // checkBeforeDeleteModal should render
      const modalTitle = screen.getByText(
        /are you sure you want to delete your account?/i
      );
      const confirmationString = screen.getByText(/testId/i);
      expect(modalTitle).toBeInTheDocument();
      expect(confirmationString).toBeInTheDocument();
    });

    test('renders error when delete account button clicked if userId is not string', async () => {
      const user = userEvent.setup();
      render(
        <SessionProvider
          session={{
            expires: '1',
            user: {
              id: 4 as unknown as string,
              email: 'testEmail@email.com',
              name: 'testUser',
              stripeCustomerId: 'testStripeid',
              isPro: false,
            },
          }}
        >
          <AccountManagement />
        </SessionProvider>
      );

      const deleteAccountButton = screen.getByRole('button', {
        name: /delete account/i,
      });

      expect(deleteAccountButton).toBeInTheDocument();
      await user.click(deleteAccountButton);

      // errorModal should render
      const returnButton = screen.getByText(/Return to Account Page/i);
      expect(returnButton).toBeInTheDocument();
    });
  });
});
