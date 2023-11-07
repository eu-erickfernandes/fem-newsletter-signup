const textEmail = document.querySelector('[data-email]')

const params = new window.URLSearchParams(window.location.search)

const email = params.get('email')

if(email)
    textEmail.textContent = email
else
    textEmail.textContent = 'email@example.com'