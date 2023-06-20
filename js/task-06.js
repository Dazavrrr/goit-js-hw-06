const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", validateInput);

function validateInput() {
  const enteredValue = validationInput.value;
  const expectedLength = parseInt(validationInput.dataset.length);

  if (enteredValue.length === expectedLength) {
    validationInput.classList.remove("invalid");
    validationInput.classList.add("valid");
  } else {
    validationInput.classList.remove("valid");
    validationInput.classList.add("invalid");
  }
}