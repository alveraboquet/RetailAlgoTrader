import { render, screen } from '@testing-library/react';
import CreateCustomerPortalSessionForm from '../../../components/accountManagement/createCustomerPortalSessionForm';
import { SessionProvider } from 'next-auth/react';

describe('<CreateCustomerPortalSessionForm />', () => {
  test('renders manage billing button', () => {
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
        <CreateCustomerPortalSessionForm
          buttonText="Manage Billing"
          buttonColor="btn-danger"
        />
      </SessionProvider>
    );

    const manageBillingButton = screen.getByRole('button', {
      name: /manage billing/i,
    });

    expect(manageBillingButton).toBeInTheDocument();
  });
});
