import React from 'react';

type ConfirmationString = {
  confirmationString: string;
};

interface Props {
  handleDeleteAccount: (e: React.FormEvent) => void;
  confirmationString: ConfirmationString;
  handleUserInput: (userInput: string) => void;
  changeIsDeleteButtonDisabled: () => void;
  isDeleteButtonDisabled: boolean;
}

const CheckBeforeDeleteForm = ({
  handleDeleteAccount,
  confirmationString,
  handleUserInput,
  changeIsDeleteButtonDisabled,
  isDeleteButtonDisabled,
}: Props) => {
  return (
    <form onSubmit={handleDeleteAccount}>
      <label htmlFor="userInput">
        Please type{' '}
        <span className="fw-bold">{confirmationString.confirmationString}</span>{' '}
        to confirm.
      </label>
      <input
        id="userInput"
        type="text"
        className="form-control"
        maxLength={30}
        required
        onChange={(e) => handleUserInput(e.target.value)}
        autoComplete={'off'}
      />
      <div className="modal-footer">
        <button
          type="reset"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
          onClick={() => changeIsDeleteButtonDisabled()}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-warning"
          disabled={isDeleteButtonDisabled}
        >
          Delete Account
        </button>
      </div>
    </form>
  );
};

export default CheckBeforeDeleteForm;