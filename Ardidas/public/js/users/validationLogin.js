// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
const expresionesRegulares = {
    exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
};

const elemento = (element) => document.querySelector(element);

const messageError = (element, msg, select) => {
    elemento(element).innerText = msg;
    elemento(element).style.color = "red";
    select.classList.add("is-invalid");
};

const validatorInput = (element, select) => {
    elemento(element).innerText = null;
    select.classList.add("is-valid");
    select.classList.remove("is-invalid");
};

window.addEventListener("load",() => {

});

const inputEmail = document.querySelector("#email")
    inputEmail.addEventListener("blur", async function({select}) {
    switch (true) {
        case !this.value.trim():
            messageError(".emailError", "Debes completar este campo con tu email", select);
            this.style.borderColor = "red";
            break;
        case !expresionesRegulares.exRegEmail.test(this.value):
            messageError(".emailError", "No tiene formato de email", select);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".emailError", select)
            this.style.borderColor= "#4F7F3F"
            break;
    }
});

const inputPassword = document.querySelector("#password")
    inputPassword.addEventListener("blur", function({select}) {
    switch (true) {
        case !this.value.trim():
            messageError(".passwordError","Debes completar el campo con tu contraseña",select);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".passwordError", select);
            this.style.borderColor = "#4F7F3F";
            break;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const passwordInput = document.getElementById('password');
    const PasswordIcon = document.querySelector('.div_login_password .fa-eye');

    PasswordIcon.addEventListener('click', function() {
        if (passwordInput.type === 'password') {
            passwordInput.type = 'text';
            PasswordIcon.classList.remove('fa-eye');
            PasswordIcon.classList.add('fa-eye-slash');
        } else {
            passwordInput.type = 'password';
            PasswordIcon.classList.remove('fa-eye-slash');
            PasswordIcon.classList.add('fa-eye');
        }
    });
});


const form = document.querySelector('.box_home_form');
const errorMessage = document.getElementById('error-message-login');

form.addEventListener('submit', function(event) {
    // capturo los errores
    const emailError = document.querySelector('.emailError');
    const passError = document.querySelector('.passwordError');

    // si alguno de elementos tiene un error
    const hasError =emailError.innerText || passError.innerText;

    // si alguno cumple con la condicion el furmulario no se envia y manda un msj
    if (hasError) {
        errorMessage.style.display = 'block'; // msj
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none'; // oculta el msj si no hay errores
    }
});
