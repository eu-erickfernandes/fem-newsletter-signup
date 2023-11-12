const form = document.querySelector("[data-form]")
const emailField = document.querySelector('[data-email-field]')

const successModal = document.querySelector('[data-success-modal]')
const successEmail = document.querySelector('[data-success-email]')
const buttonCloseModal = document.querySelector('[data-close-modal]')

buttonCloseModal.addEventListener('click', () => {
    successModal.close()
})

form.addEventListener('submit', (event) => {
    event.preventDefault()

    successEmail.textContent = emailField.value

    successModal.showModal()
})