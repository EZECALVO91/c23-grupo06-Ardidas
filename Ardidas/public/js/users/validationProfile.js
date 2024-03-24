const elemento = (element) => document.querySelector(element);

const expresionesRegulares = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
    exRegEmail: /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/,
    exRegPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d$@$!%*?&]{6,8}/,
    exRegMayu: /[A-Z]/,
    exRegMinu: /[a-z]/,
    exRegNum: /[0-9]/,
    exRegEsp: /[$@$!%*?&]/,
    exRegMinMax: /.{6,8}/,
};

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

elemento("#name").addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".nameErrors", "Debes completar el campo con tu nombre", target);
            this.style.borderColor = "red";
            break;
        case this.value.trim().length < 5:
            messageError(".nameErrors", "El nombre debe tener 5 o mas caracteres", target);
            this.style.borderColor = "red";
            break;
        case !expresionesRegulares.exRegAlfa.test(this.value):
            messageError(".nameErrors", "Solo caracteres alfabetico", target);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".nameErrors", target);
            this.style.borderColor = "#4F7F3F";
            break;
    }
});

const filtro = /\.(jpg|jpeg|png|gif|webp|svg)$/;

elemento('#image').addEventListener('change', function({target}) {
    const file = target.files[0];
    if (!file) {
        messageError(".imageError", "Formato valido.", target);
        return;
    }
    if (!filtro.test(file.name.toLowerCase())) {
        messageError(".imageError", "Solo se permiten formatos de imagen (jpg, jpeg, png, gif, webp, svg).", target);
        this.style.borderColor = "red";
    }
});
