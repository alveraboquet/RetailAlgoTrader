/**
 * Handles form validation
 *
 * @param event - Event from form submission. Uses form id from event target to
 * apply validation to correct form.
 * @returns - true if valid and false if not valid
 *
 */

const formValidation = (event: React.FormEvent) => {
  const target = event.target as Element;
  const form = document.querySelector(`#${target.id}`) as HTMLFormElement;
  if (form) {
    if (!form.checkValidity()) {
      event.stopPropagation();
      form.classList.add('was-validated');
      return false;
    } else {
      form.classList.remove('was-validated');
      return true;
    }
  }
};

export default formValidation;
