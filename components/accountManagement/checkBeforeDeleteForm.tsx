import React, { useState } from 'react';

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
  const [isDeleteClicked, setIsDeleteClicked] = useState(false);

  return (
    <form onSubmit={handleDeleteAccount}>
      <fieldset>
        <label htmlFor="userInput">
          Please type{' '}
          <span className="fw-bold">
            {confirmationString.confirmationString}
          </span>{' '}
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
      </fieldset>
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
          className="btn btn-warning d-flex"
          disabled={isDeleteButtonDisabled}
          onClick={() => setIsDeleteClicked(true)}
        >
          Delete Account
          {isDeleteClicked ? (
            <div>
              <span
                className="spinner-border spinner-border-sm"
                role="status"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <></>
          )}
        </button>
      </div>
    </form>
  );
};

export default CheckBeforeDeleteForm;
