import { screen, render } from '@testing-library/react';
import CheckBeforeDeleteModal from '../../../components/accountManagement/checkBeforeDeleteModal';
import userEvent from '@testing-library/user-event';
import server from '../../../mocks/server';
import networkErrorHandlers from '../../../mocks/networkErrorHandlers';
import React from 'react';

describe('<CheckBeforeDeleteModal />', () => {
  test('renders correctly and delete account button disabled unless inputs match', async () => {
    render(
      <CheckBeforeDeleteModal confirmationString="testConfirmationString" />
    );
    const user = userEvent.setup();

    const title = screen.getByText(
      'Are you sure you want to delete your account?'
    );
    const warningBanner = screen.getByText(
      /please read the below information before continuing/i
    );
    const confirmationString = screen.getByText(/testConfirmationString/i);
    const confirmationStringInput = screen.getByLabelText(/please type/i);
    const deleteAccountButton = screen.getByRole('button', {
      name: /delete account/i,
      hidden: true,
    });
    const cancelButton = screen.getByRole('button', {
      name: /cancel/i,
      hidden: true,
    });
    const xButton = screen.getByLabelText(/close/i);

    expect(title).toBeInTheDocument();
    expect(warningBanner).toBeInTheDocument();
    expect(confirmationString).toBeInTheDocument();
    expect(confirmationStringInput).toHaveValue('');
    expect(deleteAccountButton).toBeDisabled();
    expect(cancelButton).toBeEnabled();
    expect(xButton).toBeEnabled();

    // Enter correct confirmation string
    await user.type(confirmationStringInput, 'testConfirmationString');
    expect(deleteAccountButton).toBeEnabled();

    // Enter incorrect confirmation string
    await user.type(confirmationStringInput, 'testConfirmation');
    expect(deleteAccountButton).toBeDisabled();

    // Enter confirmation string with extra spaces at end
    await user.type(confirmationStringInput, 'testConfirmationString  ');
    expect(deleteAccountButton).toBeDisabled();
  });

  test('renders failure modal if confirmation strings match but delete process unsuccessful', async () => {
    server.use(...networkErrorHandlers);
    render(
      <CheckBeforeDeleteModal confirmationString="testConfirmationString" />
    );
    const user = userEvent.setup();

    const confirmationString = screen.getByText(/testConfirmationString/i);
    const confirmationStringInput = screen.getByLabelText(/please type/i);
    const deleteAccountButton = screen.getByRole('button', {
      name: /delete account/i,
      hidden: true,
    });
    const cancelButton = screen.getByRole('button', {
      name: /cancel/i,
      hidden: true,
    });

    expect(confirmationString).toBeInTheDocument();
    expect(confirmationStringInput).toHaveValue('');
    expect(deleteAccountButton).toBeDisabled();
    expect(cancelButton).toBeEnabled();

    // Enter correct confirmation string
    await user.type(confirmationStringInput, 'testConfirmationString');
    expect(deleteAccountButton).toBeEnabled();

    await user.click(deleteAccountButton);

    const errorModalCloseButton = await screen.findByRole('button', {
      name: /cancel/i,
      hidden: true,
    });
    expect(errorModalCloseButton).toBeInTheDocument();
  });
});
