export function showError(message) {
  const errorMessageElement = document.createElement('p');
  const errorContainerElement = document.getElementById('errors');

  errorContainerElement.innerHTML = '';
  errorMessageElement.textContent = message;
  errorContainerElement.append(errorMessageElement);
}
