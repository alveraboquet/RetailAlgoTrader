import {
  checkBeforeDelete,
  deleteCustomer,
} from '../../lib/accountManagementHelpers';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import validator from 'validator';
import CheckBeforeDeleteForm from './checkBeforeDeleteForm';

/**
 *
 * @returns - modal with required input to confirm delete intentions or an error modal if input does not match
 */
const CheckBeforeDeleteModal = (confirmationString: {
  confirmationString: string;
}) => {
  const [error, setError] = useState(false);
  const [isDeleteButtonDisabled, setIsDeleteButtonDisabled] = useState(true);
  const router = useRouter();

  /**
   *
   * @param e - Form submit event from modal. Passes user input for verification phrase
   */
  const handleDeleteAccount = async (e: React.FormEvent) => {
    e.preventDefault();
    interface FormInputs extends EventTarget {
      elements: {
        userInput: HTMLInputElement;
      };
    }
    const inputs = (e.target as FormInputs).elements;
    let userInput = inputs.userInput.value;
    if (
      validator.isLength(userInput, { min: 1, max: 30 }) &&
      !validator.isEmpty(userInput) &&
      validator.isAlphanumeric(userInput)
    ) {
      userInput = validator.trim(userInput);
      userInput = validator.escape(userInput);
    }
    const stringsMatch = checkBeforeDelete(
      confirmationString.confirmationString,
      userInput
    );
    if (stringsMatch) {
      const isCustomerDeleted = await deleteCustomer();
      if (isCustomerDeleted) router.push('/');
      else setError(true);
    } else {
      setError(true);
    }
  };

  const handleUserInput = (userInput: string) => {
    if (userInput === confirmationString.confirmationString) {
      setIsDeleteButtonDisabled(false);
    } else {
      setIsDeleteButtonDisabled(true);
    }
  };

  const changeIsDeleteButtonDisabled = () => {
    setIsDeleteButtonDisabled(true);
  };

  if (!error) {
    return (
      <div
        className="modal fade"
        id="deleteConfirmModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="deleteConfirmModalLabel"
        aria-hidden="true"
        data-testid="deleteConfirmModal"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteConfirmModalLabel">
                Are you sure you want to delete your account?
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="bg-danger text-center p-3">
              Please read the below information before continuing!
            </div>
            <div className="modal-body">
              This action cannot be reversed. All billing and account info will
              be permanently deleted.
              <CheckBeforeDeleteForm
                handleDeleteAccount={handleDeleteAccount}
                confirmationString={confirmationString}
                handleUserInput={handleUserInput}
                changeIsDeleteButtonDisabled={changeIsDeleteButtonDisabled}
                isDeleteButtonDisabled={isDeleteButtonDisabled}
              />
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className="modal fade"
        id="deleteConfirmModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="deleteConfirmModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="deleteConfirmModalLabel">
                Unable to delete account information
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="bg-danger text-center p-3">
              User input and requested verification input do not match
            </div>
            <div className="modal-body">
              Please try again and ensure your input matches the displayed
              requested verification input exactly:
              <p className="fw-bold">{confirmationString.confirmationString}</p>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                  onClick={() => {
                    setTimeout(() => {
                      setError(false);
                    }, 500);
                  }}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default CheckBeforeDeleteModal;
