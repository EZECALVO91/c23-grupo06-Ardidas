// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
const expresionesRegulares = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
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


const form = document.querySelector('.main_form_userUpdateDash');
const errorMessage = document.getElementById('error-message-updateUser');

form.addEventListener('submit', function(event) {
    // capturo los errores
    const nameError = document.querySelector('.nameError');
    const emailError = document.querySelector('.emailError');
    const imageError = document.querySelector('.imageError');

    // si alguno de elementos tiene un error
    const hasError = nameError.innerText || emailError.innerText || imageError.innerText;

    // si alguno cumple con la condicion el furmulario no se envia y manda un msj
    if (hasError) {
        errorMessage.style.display = 'block'; // msj
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none'; // oculta el msj si no hay errores
    }
});
