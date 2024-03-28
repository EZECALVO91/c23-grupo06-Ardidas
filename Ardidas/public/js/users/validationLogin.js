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
