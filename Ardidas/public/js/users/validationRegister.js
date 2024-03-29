// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
const expresionesRegulares = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    exRegPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.,;'" ])[A-Za-z\d$@$!%*?&.,;'" ]{6,20}$/,
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
    console.log("hola mundo");
});

const inputName = document.querySelector("#name");
    inputName.addEventListener("blur", function({select}) {
    switch (true) {
        case !this.value.trim():
            messageError(".nameError", "Debes completar el campo con tu nombre", select);
            this.style.borderColor = "red";
            break;
        case this.value.trim().length < 6:
            messageError(".nameError", "El nombre debe tener minimo(6) o mas caracteres", select);
            this.style.borderColor = "red";
            break;
        case this.value.trim().length > 30:
            messageError(".nameError", "El nombre debe tener maximo(30) caracteres", select);
            this.style.borderColor = "red";
            break;
        case !expresionesRegulares.exRegAlfa.test(this.value):
            messageError(".nameError", "Solo caracteres alfabetico", select);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".nameError", select);
            this.style.borderColor = "#4F7F3F";
            break;
    }
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
        case this.value.trim().length <= 5:
            messageError(".passError","Contraseña minimo(6) a maximo(20) caracteres",select);
            this.style.borderColor = "red";
            break;
        case this.value.trim().length > 20:
            messageError(".passError","Contraseña minimo(6) a maximo(20) caracteres", select);
            this.style.borderColor = "red";
            break;
        case !expresionesRegulares.exRegPass.test(this.value):
            messageError(".passError","Debes incluir números, mayúscula, minúscula y un caracter especial(d$@$!%*?&.,;')",select);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".passError", select);
            this.style.borderColor = "#4F7F3F";
            break;
    }
});

const inputPasswordDos= document.querySelector("#password2")
    inputPasswordDos.addEventListener("blur", function({select}) {
    switch (true) {
        case !this.value.trim():
            messageError(
                ".passError2",
                "Debes completar el campo con tu contraseña",
                select
            );
            this.style.borderColor = "red";
            break;
        case this.value.trim() !== elemento("#password").value.trim():
            messageError(".passError2", "Las contraseñas no coinciden", select);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".passError2", select);
            this.style.borderColor = "#4F7F3F";
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
            break;
        default:
            validatorInput(".imageError", target);
            break;
    }
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
