import { screen, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SignupForm from '../../../components/forms/signupForm';

describe('<SignupForm />', () => {
  test('renders all inputs and submit button', () => {
    render(<SignupForm />);

    const firstNameInput = screen.getByRole('textbox', { name: /first name/i });
    const lastNameInput = screen.getByRole('textbox', { name: /last name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit info/i });

    expect(firstNameInput).toBeInTheDocument();
    expect(lastNameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();
  });

  test('does not accept invalid inputs', async () => {
    const user = userEvent.setup();
    render(<SignupForm />);

    const firstNameInput = screen.getByRole('textbox', { name: /first name/i });
    const lastNameInput = screen.getByRole('textbox', { name: /last name/i });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const passwordInput = screen.getByLabelText(/password/i);
    const submitButton = screen.getByRole('button', { name: /submit info/i });

    // First name input left blank
    await user.type(lastNameInput, 'last name test');
    await user.type(emailInput, 'test@email.com');
    await user.type(passwordInput, 'test password');
    await user.click(submitButton);

    // Ensures lastNameInput is still in document
    // This verifies form did not submit
    expect(lastNameInput).toHaveValue('last name test');

    // Last name input left blank
    await user.clear(lastNameInput);
    await user.type(firstNameInput, 'first name test');
    await user.click(submitButton);

    // Ensures firstNameInput is still in document
    // This verifies form did not submit
    expect(firstNameInput).toHaveValue('first name test');

    // Email input left blank
    await user.clear(emailInput);
    await user.type(lastNameInput, 'last name test');
    await user.click(submitButton);

    // Ensures firstNameInput is still in document
    // This verifies form did not submit
    expect(firstNameInput).toHaveValue('first name test');

    // Password input left blank
    await user.clear(passwordInput);
    await user.type(emailInput, 'test@email.com');
    await user.click(submitButton);

    // Ensures firstNameInput is still in document
    // This verifies form did not submit
    expect(firstNameInput).toHaveValue('first name test');

    // Password input too short
    await user.type(passwordInput, '1234');

    // Ensures firstNameInput is still in document
    // This verifies form did not submit
    expect(firstNameInput).toHaveValue('first name test');

    // Enters a correct password and submits form
    await user.type(passwordInput, 'test password');
    await user.click(submitButton);

    // Ensures form has submitted and cleared
    expect(firstNameInput).toHaveValue('');
  });
});
