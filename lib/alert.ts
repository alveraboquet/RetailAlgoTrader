/**
 * Adds alert to page at predefined position
 * @param message - custom message to be displayed
 * @param type - color of alert
 * @param alertPlaceholder - placeholder in DOM for alert
 */
const alert = (
  message: string,
  type: string,
  alertPlaceholder: HTMLElement
) => {
  const wrapper = document.createElement('div');
  wrapper.innerHTML = [
    `<div class="alert alert-${type} alert-dismissible" role="alert">`,
    `   <div>${message}</div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
    '</div>',
  ].join('');
  alertPlaceholder.append(wrapper);
};

export default alert;
