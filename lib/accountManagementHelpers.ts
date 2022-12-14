import alert from './alert';
import validator from 'validator';
import { validateAlphaData, validateEmail } from '../lib/validateData';

/**
 *
 * @returns - name, email, and authorization provider from DB
 */
export const fetchAccountDetails = async () => {
  try {
    const res = await fetch('/api/app/user/retrieveAccountDetails', {
      headers: {
        'X-Custom-Header': 'lollipop',
      },
    });
    if (res.status === 200) {
      const data = await res.json();
      if (data) {
        return data;
      } else {
        throw new Error();
      }
    } else {
      throw new Error();
    }
  } catch (err) {
    return {
      name: 'Failed to Retrieve',
      email: 'Failed to Retrive',
    };
  }
};

/**
 *
 * @returns - last four of card, subscription plan, and price paying from Stripe API
 */
export const fetchStripeDetails = async () => {
  try {
    const res = await fetch('/api/stripe/customer/retrieveCustomer', {
      headers: {
        'X-Custom-Header': 'lollipop',
      },
    });
    if (res.status === 204) {
      return {
        lastFour: 'Not a Paying Customer',
        subscription: 'Not a Paying Customer',
        price: 0,
      };
    }
    if (res.status === 200) {
      const stripeData = await res.json();
      return {
        lastFour: `···· ···· ···· ${stripeData.lastFour}`,
        subscription: stripeData.subscription,
        price: stripeData.price,
      };
    } else {
      throw new Error();
    }
  } catch (err) {
    return {
      lastFour: 'Failed to Retrieve',
      subscription: 'Failed to Retrieve',
      price: 0,
    };
  }
};

/**
 *
 * @param placeholder - id from div in JSX component where alert banner will appear
 * @param message - custom message for the alert banner
 * @returns - bootstrap alert component
 */
export const displayAlert = (placeholder: string, message: string) => {
  const alertPlaceholder = document.getElementById(placeholder);
  if (alertPlaceholder) {
    return alert(message, 'danger', alertPlaceholder);
  }
};

/**
 *
 * @param event - form submit event from account info change form
 * @returns - false if user input is invalid and true if user input is valid
 */
export const changeAccountInfo = async (event: React.FormEvent) => {
  try {
    interface FormInputs extends EventTarget {
      elements: {
        newName: HTMLInputElement;
        newEmail: HTMLInputElement;
      };
    }
    const inputs = (event.target as FormInputs).elements;
    let newName = inputs.newName.value;
    let newEmail = inputs.newEmail.value;
    // if the name or email form inputs are blank then keep the original name or email value
    if (validator.isEmpty(newName)) {
      newName = inputs.newName.placeholder;
    }
    if (validator.isEmpty(newEmail)) {
      newEmail = inputs.newEmail.placeholder;
    }
    const validatedNewName = validateAlphaData(newName, 1, 255);
    const validatedNewEmail = validateEmail(newEmail, 1, 255);
    if (!validatedNewName || !validatedNewEmail) return false;
    // submit new account into to API route
    const res = await fetch('/api/app/user/changeAccountDetails', {
      method: 'PUT',
      headers: {
        'X-Custom-Header': 'lollipop',
      },
      body: JSON.stringify({
        newName: validatedNewName,
        newEmail: validatedNewEmail,
      }),
    });
    if (res.status === 200) {
      (event.target as HTMLFormElement).reset();
      return true; // Returns true if all input is valid
    } else {
      return false; // Returns false if any input is invalid
    }
  } catch (err) {
    console.log(err);
    return false;
  }
};

/**
 * deletes customer from Stripe database and our database
 * @returns - true if delete process successful and false if delete process fails
 */
export const deleteCustomer = async () => {
  try {
    const res = await fetch('/api/stripe/customer/deleteCustomer', {
      method: 'DELETE',
      headers: {
        'X-Custom-Header': 'lollipop',
      },
    });
    if (res.status === 204) return true;
    else return false;
  } catch (err) {
    console.log(err);
    displayAlert(
      'deleteAccountAlertPlaceholder',
      'Unable to delete account information. Please try again. If this issue continues please email contact@retailalgotrader.com'
    );
    return false;
  }
};

/**
 *
 * @param confirmationString - random alphanumeric string
 * @param userInput - input by user on modal
 * @returns  - true if inputs match and false if inputs do not match
 */
export const checkBeforeDelete = (
  confirmationString: string,
  userInput: string
) => {
  if (confirmationString === userInput) {
    return true;
  } else {
    return false;
  }
};

/**
 *
 * @param e - form submission event from AccountInfoChangeForm
 * @returns - true if valid input and false if not valid input
 */
export const verifyAccountInfoChange = async (e: React.FormEvent) => {
  const formValidation = (await import('../lib/formValidation')).default;
  const validated = formValidation(e);
  if (validated) {
    const validInput = await changeAccountInfo(e);
    return validInput;
  } else {
    return false;
  }
};
