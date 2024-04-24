// documentacion = https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Regular_Expressions
const expresionesRegulares = {
    exRegAlfa: /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/,
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

const inputName = document.querySelector("#name");
    inputName.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".nameErrors", "Debes completar el campo con tu nombre", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case this.value.trim().length < 6:
            messageError(".nameErrors", "El nombre debe tener 6 o más caracteres", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case !expresionesRegulares.exRegAlfa.test(this.value):
            messageError(".nameErrors", "Solo caracteres alfabéticos", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        default:
            validatorInput(".nameErrors", target);
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
            break;
    }
});



const inputDate = document.querySelector('#date');
const dateError = document.querySelector('.errorDate');
inputDate.addEventListener("blur", function({target}) {
    const fecha = this.value.trim();
    let errorMessage = null;
        if (fecha) {
            switch (true) {
                case isNaN(new Date(fecha).getTime()):
                    errorMessage = 'Fecha inválida';
                    break;
                default:
                    const dateObject = new Date(fecha);
                    const fechaLimite = new Date();
                    const fechaMinima = new Date();
    //Los métodos setFullYear y getFullYear son metodos Date en JavaScript y se utilizan para establecer y obtener el año de un objeto de fecha.
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/setFullYear
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear
                    fechaLimite.setFullYear(fechaLimite.getFullYear() - 16);
                    fechaMinima.setFullYear(fechaMinima.getFullYear() - 100);
                        if (dateObject >= fechaLimite) {
                            errorMessage = 'Edad mínima 16 años';
                        } else if (dateObject <= fechaMinima) {
                            errorMessage = 'Fecha fuera de término';
                        }
                    break;
        }
    }
    if (errorMessage) {
        messageError('.errorDate', errorMessage, target);
        this.style.borderColor = "red";
    } else {
        validatorInput('.errorDate', target);
        this.style.borderColor = "#4F7F3F";
    }
});


const filtro = /\.(jpg|jpeg|png|gif|webp|svg)$/;
const inputImg = document.querySelector('#image');
inputImg.addEventListener('change', function({target}) {
    const file = target.files[0];
    switch (true) {
        case !filtro.test(file.name.toLowerCase()):
            messageError(".imageError", "Solo se permiten formatos de imagen (jpg, jpeg, png, gif, webp, svg).", target);
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        default:
            validatorInput(".imageError", target);
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
            break;
    }
});

const form = document.querySelector('.form_updateProfile');
const errorMessage = document.getElementById('error-message-profileEdit');
form.addEventListener('submit', function(event) {
    // capturo los errores
    const nameErrors = document.querySelector('.nameErrors');
    const imageError = document.querySelector('.imageError');
    const errorDate = document.querySelector('.errorDate');

    // si alguno de elementos tiene un error
    const hasError = nameErrors.innerText || imageError.innerText || errorDate.innerText;

    // si alguno cumple con la condicion el furmulario no se envia y manda un msj
    if (hasError) {
        errorMessage.style.display = 'block'; // msj
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none'; // oculta el msj si no hay errores
    }
});
