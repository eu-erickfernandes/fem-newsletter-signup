const campoEmail = document.querySelector('[data-campo-email]')

campoEmail.addEventListener('blur', () => {
    campoEmail.classList.add('touched')
})