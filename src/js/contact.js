const contactForm = document.querySelector(".contact__form")
const allContactInputBoxes = document.querySelectorAll(".contact__input-box")
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


contactForm.addEventListener("submit", event => {
  event.preventDefault()

  checkNameInput()
  checkEmailInput()
  checkMessageInput()
  validateInputs()
})

const errorMessageForEmptyFields = element => element.innerText = "Você precisa preencher este campo"
const addErrorClass = element => element.classList.add("error")
const removeErrorClass = element => element.classList.remove("error")

function checkNameInput() {
  if (nameInput.value === '' || nameInput.value == null) {
    errorMessageForEmptyFields(nameErrorMessage)
    addErrorClass(nameInputBox)
  } else if (nameInput.value.length < 3) {
    nameErrorMessage.innerText = "O nome precisa conter no mínimo 3 caracteres"
    addErrorClass(nameInputBox)
  } else if (nameInput.value.indexOf(" ") >= 0) {
    nameErrorMessage.innerText = "Nome invalido, verifique se há espaços em branco"
    addErrorClass(nameInputBox)
  } else {
    removeErrorClass(nameInputBox)
  }
}

function checkEmailInput() {
  if (emailInput.value === "" || emailInput.value == null) {
    errorMessageForEmptyFields(emailErrorMessage)
    addErrorClass(emailInputBox)
  } else if (!validEmail.test(emailInput.value)) {
    emailErrorMessage.innerText = "Digite um email valido"
    addErrorClass(emailInputBox)
  } else {
    removeErrorClass(emailInputBox)
  }
}

function checkMessageInput() {
  if (messageInput.value === "" || messageInput == null) {
    errorMessageForEmptyFields(textAreaErrorMessage)
    addErrorClass(messageInputBox)
  } else {
    removeErrorClass(messageInputBox)
  }
}

// Validates whether the inputs have any errors or not, and calls custom alerts depending on the condition
function validateInputs() {
  const contactInputBoxesArray = Array.from(allContactInputBoxes)
  const validate = contactInputBoxesArray.filter(element => element.classList.contains("error"))

  if (validate.length > 0) return showFailedAlert()
  return showSuccessAlert()
}

const successAlert = document.getElementById("success-alert")
const successAlertTimeout = document.getElementById("success-timeout")
let timeoutFunctionOfSuccessAlert = null

function showSuccessAlert() {
  if (!successAlert.classList.contains("fade-in")) {
    successAlertTimeout.style.width = "100%"
    successAlert.classList.remove("fade-out")
    successAlert.classList.add("fade-in")
    successAlertTimeout.classList.add("timeout")

    timeoutFunctionOfSuccessAlert = setTimeout(() => {
      successAlert.classList.remove("fade-in")
      successAlert.classList.add("fade-out")

      setTimeout(() => {
        successAlert.classList.remove("fade-out")
        successAlertTimeout.classList.remove("timeout")
      }, 600)
    }, 4890)
  }
}

const successAlertCloseButton = document.getElementById("close-success-alert")

successAlertCloseButton.addEventListener("click", () => {
  clearTimeout(timeoutFunctionOfSuccessAlert)
  successAlert.classList.add("fade-out")
  successAlert.classList.remove("fade-in")
  successAlertTimeout.style.width = "0"
  successAlertTimeout.classList.remove("timeout")
})


const failedAlert = document.getElementById("failed-alert")
const failedAlertTimeout = document.getElementById("failed-timeout")
let timeoutFunctionOfFailedAlert = null

function showFailedAlert() {
  if (!failedAlert.classList.contains("fade-in")) {
    failedAlertTimeout.style.width = "100%"
    failedAlert.classList.remove("fade-out")
    failedAlert.classList.add("fade-in")
    failedAlertTimeout.classList.add("timeout")

    timeoutFunctionOfFailedAlert = setTimeout(() => {
      failedAlert.classList.remove("fade-in")
      failedAlert.classList.add("fade-out")

      setTimeout(() => {
        failedAlert.classList.remove("fade-out")
        failedAlertTimeout.classList.remove("timeout")
      }, 600)
    }, 4890)
  }
}

const failedAlertCloseButton = document.getElementById("close-failed-alert")

failedAlertCloseButton.addEventListener("click", () => {
  clearTimeout(timeoutFunctionOfFailedAlert)
  failedAlert.classList.add("fade-out")
  failedAlert.classList.remove("fade-in")
  failedAlertTimeout.style.width = "0"
  failedAlertTimeout.classList.remove("timeout")
})
