// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
const expresionesRegulares = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
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

const inputName = document.querySelector("#name");
    inputName.addEventListener("blur", function({select}) {
    switch (true) {
        case !this.value.trim():
            messageError(".nameErrors", "Debes completar el campo con tu nombre", select);
            this.style.borderColor = "red";
            break;
        case this.value.trim().length < 6:
            messageError(".nameErrors", "El nombre debe tener 6 o mas caracteres", select);
            this.style.borderColor = "red";
            break;
        case !expresionesRegulares.exRegAlfa.test(this.value):
            messageError(".nameErrors", "Solo caracteres alfabetico", select);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".nameErrors", select);
            this.style.borderColor = "#4F7F3F";
            break;
    }
});

const filtro = /\.(jpg|jpeg|png|gif|webp|svg)$/;

const inputImg = document.querySelector('#image');
inputImg.addEventListener('change', function({select}) {
    const file = select.files[0];
    if (!file) {
        messageError(".imageError", "Formato válido.", select);
        return;
    }
    switch (true) {
        case !filtro.test(file.name.toLowerCase()):
            messageError(".imageError", "Solo se permiten formatos de imagen (jpg, jpeg, png, gif, webp, svg).", select);
            break;
        default:
            validatorInput(".imageError", select);
            break;
    }
});
