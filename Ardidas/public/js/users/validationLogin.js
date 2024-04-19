document.addEventListener('DOMContentLoaded', function () {
    ////seleccionamos lo que vamos a utilizard
    const title = document.querySelector('.main__form__title');

    // y le pedimos que nos haga un scroll directo al titulo
    title.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
const expresionesRegulares = {
    exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
};

const elemento = (element) => document.querySelector(element);

const messageError = (element, msg, target) => {
    elemento(element).innerText = msg;
    elemento(element).style.color = "red";
    target.classList.add("is-invalid");
};

const validatorInput = (element, target) => {
    elemento(element).innerText = null;
    target.classList.add("is-valid");
    target.classList.remove("is-invalid");
};

window.addEventListener("load",() => {

});

const inputEmail = document.querySelector("#email")
    inputEmail.addEventListener("blur", async function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".emailError", "Debes completar este campo con tu email", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case !expresionesRegulares.exRegEmail.test(this.value):
            messageError(".emailError", "No tiene formato de email", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        default:
            validatorInput(".emailError", target)
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "white"
            break;
    }
});

const inputPassword = document.querySelector("#password")
    inputPassword.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".passwordError","Debes completar el campo con tu contraseña",target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        default:
            validatorInput(".passwordError", target);
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "white"
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
