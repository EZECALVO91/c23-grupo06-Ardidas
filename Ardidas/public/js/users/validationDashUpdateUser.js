// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
const expresionesRegulares = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
};

const elemento = (element) => document.querySelector(element);

const messageError = (element, msg, target) => {
    elemento(element).innerText = msg;
    elemento(element).style.color = "red";
    this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
    target.classList.add("is-invalid");
};

const validatorInput = (element, target) => {
    elemento(element).innerText = null;
    target.classList.add("is-valid");
    target.classList.remove("is-invalid");
};

const inputName = document.querySelector("#name");
    inputName.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".nameError", "Debes completar el campo con tu nombre", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case this.value.trim().length < 6:
            messageError(".nameError", "El nombre debe tener mínimo(6) caracteres", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case this.value.trim().length > 30:
            messageError(".nameError", "El nombre debe tener máximo(30) caracteres", target);
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
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
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
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
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
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)"
            break;
        default:
            validatorInput(".imageError", target);
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
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
