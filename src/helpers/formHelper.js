/**
 * Trigger an error for a form
 *
 * @since 1.0.2
 *
 * @param elementId
 * @param message
 */
export const triggerError = (elementId, message) => {
  const element = document.getElementById(elementId);
  const parent = element.parentNode;

  if (!element.classList.contains("tada-field-error")) {
    element.classList.add("tada-field-error");
  }

  let go = true;

  parent.childNodes.forEach((element) => {
    if (element.classList.contains("tada-error-message")) {
      go = false;
    }
  });

  if (go) {
    const errorMessage = document.createElement("p");
    errorMessage.innerText = message;
    errorMessage.classList.add("tada-error-message");
    parent.appendChild(errorMessage);
  }
};

/**
 * Reset the errors from a form
 *
 * @since 1.0.2
 *
 * @param formElement
 */
export const resetForm = (formElement) => {
  const status = document.getElementById("tada-status");
  status.innerText = "";

  if (status.classList.contains("tada-hidden")) {
    status.classList.remove("tada-hidden");
  }

  resetErrorGroup(
    document.querySelectorAll("#" + formElement.id + ' input[type="text"]')
  );
  resetErrorGroup(
    document.querySelectorAll("#" + formElement.id + ' input[type="password"]')
  );

  const errorMessages = document.querySelectorAll(
    "#" + formElement.id + " .tada-error-message"
  );

  errorMessages.forEach((error) => {
    error.remove();
  });
};

/**
 * Reset a form group from errors
 *
 * @since 1.0.2
 *
 * @param group
 */
const resetErrorGroup = (group) => {
  group.forEach((input) => {
    if (input.classList.contains("tada-field-error")) {
      input.classList.remove("tada-field-error");
    }
  });
};
