const elemento = (element) => document.querySelector(element)

const messageError = (element, msg, target) => {
    elemento(element).innerText = msg;
    elemento(element).style.color = "red";
    target.classList.add('is-invalid')
};

const validatorInput = (element, target) => {
    elemento(element).innerText = null;
    target.classList.add('is-valid')
    target.classList.remove('is-invalid')
}

    const inputName = document.querySelector("#name");
        inputName.addEventListener("blur", function({target}){
    switch (true) {
        case !this.value.trim():
            messageError('.errorName', 'El nombre es obligatorio', target)
            this.style.borderColor = "red";
            break;
        case this.value.trim().length < 3:
            messageError('.errorName', 'El nombre debe tener de 3 a 50 carácteres', target)
            this.style.borderColor = "red";
            break;
        default:
            validatorInput(".errorName", target)
            this.style.borderColor = "#4F7F3F";
            break; 
    }
})


const inputPrice = document.querySelector('#price');
    inputPrice.addEventListener("blur", function({target}) {

switch (true) {
case !this.value.trim():
    messageError('.errorPrice', 'El precio es obligatorio', target)
    this.style.borderColor = "red"
    break;
default:
    validatorInput('.errorPrice', target)
    this.style.borderColor = "#4F7F3F"
    break; 
}
})


const inputDescription = document.querySelector('#description');
    inputDescription.addEventListener("blur", function({target}) {
    const descripcion = this.value.trim();
    const descripcionLength = descripcion.length;

    switch (true) {
        case descripcionLength === 0:
            validatorInput('.errorDescription', target);
            this.style.borderColor = "#4F7F3F";
            break;
        case descripcionLength < 20:
            messageError('.errorDescription', 'La descripción debe tener al menos 20 caracteres', target);
            this.style.borderColor = "red";
            break;
        case descripcionLength > 500:
            messageError('.errorDescription', 'La descripción debe tener como máximo 500 caracteres', target);
            this.style.borderColor = "red";
            break;
        default:
            validatorInput('.errorDescription', target);
            this.style.borderColor = "#4F7F3F";
            break;
    }
});

const filtro = /\.(jpg|jpeg|png|gif|webp|svg)$/;

const inputImage = document.querySelector('#image');
    inputImage.addEventListener("change", function({target}) {
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


const form = document.querySelector('.form_loadProduct');
const errorMessage = document.getElementById('error-message-updateProduct');

form.addEventListener('submit', function(event) {
    // capturo los errores
    const errorName = document.querySelector('.errorName');
    const errorPrice = document.querySelector('.errorPrice');
    const errorDescription = document.querySelector('.errorDescription');
    const imageError = document.querySelector('.imageError');

    // si alguno de elementos tiene un error
    const hasError = errorName.innerText || errorPrice.innerText || errorDescription.innerText || imageError.innerText;

    // si alguno cumple con la condicion el furmulario no se envia y manda un msj
    if (hasError) {
        errorMessage.style.display = 'block'; // msj
        event.preventDefault();
    } else {
        errorMessage.style.display = 'none'; // oculta el msj si no hay errores
    }
});


