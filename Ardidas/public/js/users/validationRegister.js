// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
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
    console.log("hola mundo");
});

const inputName = document.querySelector("#name");
    inputName.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".nameError", "Debes completar el campo con tu nombre", target);
            this.style.borderColor = "red";
            break;
        case this.value.trim().length < 5:
            messageError(".nameError", "El nombre debe tener 5 o mas caracteres", target);
            this.style.borderColor = "red";
            break;
        case !expresionesRegulares.exRegAlfa.test(this.value):
            messageError(".nameError", "Solo caracteres alfabetico", target);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".nameError", target);
            this.style.borderColor = "#4F7F3F";
            break;
    }
});

const inputEmail = document.querySelector("#email")
    inputEmail.addEventListener("blur", async function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".emailError", "Debes completar este campo con tu email", target);
            this.style.borderColor = "red";
            break;
        case !expresionesRegulares.exRegEmail.test(this.value):
            messageError(".emailError", "No tiene formato de email", target);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".emailError", target)
            this.style.borderColor= "#4F7F3F"
            break;
    }
});

const inputPassword = document.querySelector("#password")
    inputPassword.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".passError","Contraseña desde 6 a 20 caracteres",target);
            this.style.borderColor = "red";
            break;
        case !expresionesRegulares.exRegPass.test(this.value):
            messageError(".passError","Debes incluir números, mayúscula, minúscula",target
            );
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".passError", target);
            this.style.borderColor = "#4F7F3F";
            break;
    }
});

const inputPasswordDos= document.querySelector("#password2")
    inputPasswordDos.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(
                ".passError2",
                "Debes completar el campo con tu contraseña",
                target
            );
            this.style.borderColor = "red";
            break;
        case this.value.trim() !== elemento("#password").value.trim():
            messageError(".passError2", "Las contraseñas no coinciden", target);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".passError2", target);
            this.style.borderColor = "#4F7F3F";
            break;
    }
});

const filtro = /\.(jpg|jpeg|png|gif|webp|svg)$/;

const inputImg = document.querySelector('#image')
    inputImg.addEventListener('change', function({target}) {
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