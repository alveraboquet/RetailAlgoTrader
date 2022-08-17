import { screen, render } from '@testing-library/react';
import CheckBeforeDeleteForm from '../../../components/accountManagement/checkBeforeDeleteForm';
import React from 'react';

describe('<CheckBeforeDeleteForm />', () => {
  test('renders form correctly and delete account button disabled', () => {
    render(
      <CheckBeforeDeleteForm
        handleDeleteAccount={jest.fn}
        confirmationString={{ confirmationString: 'testConfirmationString' }}
        handleUserInput={jest.fn}
        changeIsDeleteButtonDisabled={jest.fn}
        isDeleteButtonDisabled={true}
      />
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

    expect(confirmationString).toBeInTheDocument();
    expect(confirmationStringInput).toHaveValue('');
    expect(deleteAccountButton).toBeDisabled();
    expect(cancelButton).toBeEnabled();
  });

  test('renders form correctly and delete account button enabled', () => {
    render(
      <CheckBeforeDeleteForm
        handleDeleteAccount={jest.fn}
        confirmationString={{ confirmationString: 'differentTestString' }}
        handleUserInput={jest.fn}
        changeIsDeleteButtonDisabled={jest.fn}
        isDeleteButtonDisabled={false}
      />
    );

    const confirmationString = screen.getByText(/differentTestString/i);
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
    expect(deleteAccountButton).toBeEnabled();
    expect(cancelButton).toBeEnabled();
  });
});
