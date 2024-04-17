document.addEventListener('DOMContentLoaded', function() {
    //seleccionamos lo que vamos a utilizard
    const title = document.querySelector('.main__form__title');
    // y le pedimos que nos haga un scroll directo al titulo
    title.scrollIntoView({ behavior: 'smooth', block: 'start' });
});




// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
const expresionesRegulares = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    exRegPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.,;'" ])[A-Za-z\d$@$!%*?&.,;'" ]{6,20}$/,
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
    // console.log("hola mundo");
});

const inputName = document.querySelector("#name");
    inputName.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".nameError", "Debes completar el campo con tu nombre", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case this.value.trim().length < 6:
            messageError(".nameError", "El nombre debe tener un mínimo de 6 caracteres", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case this.value.trim().length > 30:
            messageError(".nameError", "El nombre debe tener un máximo de 30 caracteres", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case !expresionesRegulares.exRegAlfa.test(this.value):
            messageError(".nameError", "Solo caracteres alfabéticos", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        default:
            validatorInput(".nameError", target);
            this.style.borderColor = "#4F7F3F";
            this.style.backgroundColor = "white";
            break;
    }
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
            this.style.borderColor= "#4F7F3F";
            this.style.backgroundColor = "white";
            break;
    }
});

const inputPassword = document.querySelector("#password")
    inputPassword.addEventListener("blur", function({target}) {
    switch (true) {
        case this.value.trim().length <= 5:
            messageError(".passError","Contraseña mínimo(6) a máximo(20) caracteres",target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case this.value.trim().length > 20:
            messageError(".passError","Contraseña mínimo(6) a máximo(20) caracteres", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case !expresionesRegulares.exRegPass.test(this.value):
            messageError(".passError","Debes incluir números, mayúscula, minúscula y un caracter especial(@$!%*?&.,;')",target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        default:
            validatorInput(".passError", target);
            this.style.borderColor = "#4F7F3F";
            this.style.backgroundColor = "white";
            break;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const passwordInputs = document.querySelectorAll('.main__form__register__password input[type="password"]');
    const PasswordIcons = document.querySelectorAll('.main__form__register__password .fa-eye');

    PasswordIcons.forEach(function(icon, index) {
        icon.addEventListener('click', function() {
            const passwordInput = passwordInputs[index];
            if (passwordInput.type == 'password') {
                passwordInput.type = 'text';
                icon.classList.remove('fa-eye');
                icon.classList.add('fa-eye-slash');
            } else {
                passwordInput.type = 'password';
                icon.classList.remove('fa-eye-slash');
                icon.classList.add('fa-eye');
            }
        });
    });
});

const filtro = /\.(jpg|jpeg|png|gif|webp|svg)$/;

const inputImg = document.querySelector('#image');
inputImg.addEventListener('change', function({target}) {
    const file = target.files[0];
    if (!file) {
        messageError(".imageError", "Formato válido.", target);
        return;
    }
    switch (true) {
        case !filtro.test(file.name.toLowerCase()):
            messageError(".imageError", "Solo se permiten formatos de imagen (jpg, jpeg, png, gif, webp, svg).", target);
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        default:
            validatorInput(".imageError", target);
            this.style.backgroundColor = "rgba(0, 128, 0, 0.2)";
            break;
    }
});

function validateForm() {
    const isCaptchaValid = validateCaptcha();

    if (!isCaptchaValid) {
        return false;
    }
}

function validateCaptcha() {
    const captchaResponse = grecaptcha.getResponse();
    const captchaErrorElement = document.querySelector('.captchaError');

    if (!captchaResponse) {
        captchaErrorElement.textContent = 'Por favor, completa el captcha.';
        return false;
    } else {
        captchaErrorElement.textContent = ''; // Limpiar el mensaje de error
        return true;
    }
}

// Agregar un evento al captcha para limpiar el mensaje de error cuando se complete
document.querySelector('.g-recaptcha').addEventListener('change', function () {
    validateCaptcha();
});



const form = document.querySelector('.main__form__register');
const errorMessage = document.getElementById('error-message-registerUser');

form.addEventListener('submit', function(event) {
    // capturo los errores
    const nameError = document.querySelector('.nameError');
    const emailError = document.querySelector('.emailError');
    const passError = document.querySelector('.passError');
    const passError2 = document.querySelector('.passError2');
    const imageError = document.querySelector('.imageError');
    // const captchaError = document.querySelector('.captchaError');



    // si alguno de elementos tiene un error
    const hasError = nameError.innerText || emailError.innerText || passError.innerText || passError2.innerText || imageError.innerText;

    // si alguno cumple con la condicion el furmulario no se envia y manda un msj
    if (hasError) {
        errorMessage.style.display = 'block'; // msj
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none'; // oculta el msj si no hay errores
    }
});
