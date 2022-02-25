const contactForm = document.querySelector(".contact__form")
const allContactInputBoxes = document.querySelectorAll(".contact__input-box")
const contactInputBoxesArray = Array.from(allContactInputBoxes)
const validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


contactForm.addEventListener("submit", e => {
  e.preventDefault()

  checkInputs()
  validateInputs()
})

// Checks if the inputs have errors, if it has, throws a custom message and adds a red border to the input with error, if there is no error just remove the error class
function checkInputs() {
  if (nameInput.value === '' || nameInput.value == null) {
    nameErrorMessage.innerText = "Você precisa preencher este campo"
    nameInputBox.classList.add("error")
  } else if (nameInput.value.length < 3) {
    nameErrorMessage.innerText = "O nome precisa conter no mínimo 3 caracteres"
    nameInputBox.classList.add("error")
  } else if (nameInput.value.indexOf(" ") >= 0) {
    nameErrorMessage.innerText = "Nome invalido, verifique se há espaços em branco"
    nameInputBox.classList.add("error")
  } else {
    nameInputBox.classList.remove("error")
  }

  if (emailInput.value === "" || emailInput.value == null) {
    emailErrorMessage.innerText = "Você precisa preencher este campo"
    emailInputBox.classList.add("error")
  } else if (!validEmail.test(emailInput.value)) {
    emailErrorMessage.innerText = "Digite um email valido"
    emailInputBox.classList.add("error")
  } else {
    emailInputBox.classList.remove("error")
  }

  if (messageInput.value === "" || messageInput == null) {
    textAreaErrorMessage.innerText = "Você precisa preencher este campo"
    messageInputBox.classList.add("error")
  } else {
    messageInputBox.classList.remove("error")
  }
}

// Validates whether the inputs have any errors or not, and calls custom alerts depending on the condition
function validateInputs() {
  const validate = contactInputBoxesArray.filter((element) => {
    return element.classList.contains("error")
  })

  if (validate.length > 0) {
    showFailedAlert()
  } else {
    showSuccessAlert()
  }
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
