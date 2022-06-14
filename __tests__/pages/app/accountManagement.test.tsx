import { render, screen } from '@testing-library/react';
import AccountManagement from '../../../pages/app/accountManagement';
import { SessionProvider } from 'next-auth/react';
import userEvent from '@testing-library/user-event';

describe('<AccountManagement />', () => {
  test('renders account settings section with correct initial data', async () => {
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

    const header = screen.getByRole('link', { name: /dashboard/i });
    const logoutButton = screen.getByRole('button', { name: /logout/i });
    const footer = screen.getByRole('heading', { name: /about us/i });
    const sectionHeader = screen.getByText(/account settings/i);
    const nameInput = await screen.findByPlaceholderText('testUser');
    const emailInput = await screen.findByLabelText('Email:');
    const saveButton = screen.getByRole('button', { name: /save/i });
    let cancelButton = screen.queryByTestId('cancelAccountInfoChangeButton');

    expect(header).toBeInTheDocument();
    expect(logoutButton).toBeInTheDocument();
    expect(footer).toBeInTheDocument();
    expect(sectionHeader).toBeInTheDocument();
    expect(nameInput).toHaveDisplayValue('testUser');
    expect(emailInput).toHaveDisplayValue('testUser@email.com');
    expect(saveButton).toBeDisabled();
    expect(cancelButton).not.toBeInTheDocument();

    // Disable button on new input
    await user.type(nameInput, 'newTestUserName');
    expect(saveButton).toBeEnabled();
    cancelButton = screen.getByTestId('cancelAccountInfoChangeButton');
    expect(cancelButton).toBeInTheDocument();
    await user.click(cancelButton);
    expect(nameInput).toHaveDisplayValue('testUser');

    // Update email info
    await user.type(emailInput, 'newTestUserEmail@email.com');
    expect(saveButton).toBeEnabled();
    await user.click(saveButton);
    expect(saveButton).toBeDisabled();
    expect(nameInput).toHaveDisplayValue('newTestUserName');
  });
});
