/**
 * @param event - Event from form submission. Uses form id from event target to
 * apply validation to correct form.
 * @returns - true if valid and false if not valid
 * https://getbootstrap.com/docs/5.0/forms/validation/
 */
const formValidation = (event: React.FormEvent) => {
  const target = event.target as Element;
  const form = document.querySelector(`#${target.id}`) as HTMLFormElement;
  if (form) {
    if (!form.checkValidity()) {
      event.stopPropagation();
      // class was-validated used by Bootstrap to render validation messages
      form.classList.add('was-validated');
      return false;
    } else {
      form.classList.remove('was-validated');
      return true;
    }
  }
};

export default formValidation;
