import DOMPurify from 'isomorphic-dompurify';
import React from 'react';

type SetAccountSettingsChange = () => void;

interface Props {
  handleAccountInfoChange: (e: React.FormEvent) => void;
  accountDetails: {
    name: string;
    email: string;
  };
  setAccountSettingsChangeTrue: SetAccountSettingsChange;
  setAccountSettingsChangeFalse: SetAccountSettingsChange;
  isAccountSettingsChanged: boolean;
}

/**
 *
 * @param param0 - functions and props from AccountManagement page
 * @returns - form for changing account info in database
 */
const AccountInfoChangeForm = ({
  handleAccountInfoChange,
  accountDetails,
  setAccountSettingsChangeTrue,
  setAccountSettingsChangeFalse,
  isAccountSettingsChanged,
}: Props) => {
  return (
    <form
      onSubmit={handleAccountInfoChange}
      className="form rounded"
      noValidate
      id="accountSettings"
    >
      <fieldset>
        <legend>Account Settings</legend>
        <div className="row ps-3 pe-3 ps-md-0 pe-md-0">
          <div className="col-3">
            <label htmlFor="newName" className="form-label">
              Name:
            </label>
          </div>
          <div className="col-9 col-md-3">
            <input
              id="newName"
              type="text"
              autoComplete="given-name"
              className="form-control"
              placeholder={DOMPurify.sanitize(accountDetails.name)}
              maxLength={20}
              onChange={() => {
                setAccountSettingsChangeTrue();
              }}
            />
          </div>
        </div>
        <div className="row mt-4 ps-3 pe-3 ps-md-0 pe-md-0">
          <div className="col-3">
            <label htmlFor="newEmail" className="form-label">
              Email:
            </label>
          </div>
          <div className="col-9 col-md-3">
            <input
              id="newEmail"
              type="email"
              autoComplete="email"
              aria-describedby="emailHelp"
              className="form-control"
              placeholder={DOMPurify.sanitize(accountDetails.email)}
              maxLength={200}
              onChange={() => {
                setAccountSettingsChangeTrue();
              }}
            />
            <div className="invalid-feedback">
              Please ensure email is of form johnsmith@email.com
            </div>
          </div>
        </div>
      </fieldset>
      <div id="accountAlertPlaceholder" className="mt-3"></div>
      <div className="text-end ps-3 pe-3 ps-md-0 pe-md-0">
        {isAccountSettingsChanged ? (
          <button
            type="button"
            className="btn btn-light border me-3"
            data-testid="cancelAccountInfoChangeButton"
            onClick={() => {
              setAccountSettingsChangeFalse();
              (
                document.getElementById('accountSettings') as HTMLFormElement
              ).reset();
            }}
          >
            Cancel
          </button>
        ) : (
          <></>
        )}

        <button
          type="submit"
          className="btn btn-warning"
          disabled={!isAccountSettingsChanged}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default AccountInfoChangeForm;
