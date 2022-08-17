import { render, screen } from '@testing-library/react';
import AccountInfoChangeForm from '../../../components/accountManagement/accountInfoChangeForm';
import { SessionProvider } from 'next-auth/react';
import React from 'react';

describe('<AccountInfoChangeForm />', () => {
  test('renders account settings change form with buttons disabled', () => {
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
        <AccountInfoChangeForm
          handleAccountInfoChange={jest.fn()}
          accountDetails={{ name: 'fakeUser', email: 'fakeUser@email.com' }}
          setAccountSettingsChangeTrue={jest.fn}
          setAccountSettingsChangeFalse={jest.fn}
          isAccountSettingsChanged={false}
        />
      </SessionProvider>
    );

    const nameInput = screen.getByPlaceholderText('fakeUser');
    const emailInput = screen.getByPlaceholderText('fakeUser@email.com');
    const saveButton = screen.getByRole('button', { name: /save/i });
    const cancelButton = screen.queryByTestId('cancelAccountInfoChangeButton');

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(saveButton).toBeDisabled();
    expect(cancelButton).not.toBeInTheDocument();
  });

  test('renders account settings change form with buttons enabled', () => {
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
        <AccountInfoChangeForm
          handleAccountInfoChange={jest.fn()}
          accountDetails={{ name: 'testUser', email: 'testUser@email.com' }}
          setAccountSettingsChangeTrue={jest.fn}
          setAccountSettingsChangeFalse={jest.fn}
          isAccountSettingsChanged={true}
        />
      </SessionProvider>
    );

    const nameInput = screen.getByPlaceholderText('testUser');
    const emailInput = screen.getByPlaceholderText('testUser@email.com');
    const saveButton = screen.getByRole('button', { name: /save/i });
    const cancelButton = screen.getByRole('button', { name: /cancel/i });

    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(saveButton).toBeEnabled();
    expect(cancelButton).toBeEnabled();
  });
});
