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
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
            break;
    }
});

const inputEmail = document.querySelector("#email");
inputEmail.addEventListener("blur", async function({target}) { //hacemos la funcion asincronica para poder trabajar
    switch (true) {                                            //con fetch y espere la respuesta y la envie.
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
            try {
                // hacemos un fetch para consultar la base de datos
                const response = await fetch('http://localhost:3000/api/allUsers');
                const data = await response.json();//la respuesta la pasamos a json para poder usarla

                // de los datos sacamos las respuestas y mapeamos para ver si existe el email
                const emails = data.users.map(user => user.email);

                //nos fijamos si lo que ponemos en el input coincide con lo obtenido de la bdd
                const emailExists = emails.includes(this.value);

                if (emailExists) {//si encontramos una coincidencia va a tirar este error
                    messageError(".emailError", "El correo electrónico ya está registrado", target);
                    this.style.borderColor = "red";
                    this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
                } else {
                    validatorInput(".emailError", target)
                    this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
                    this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
                }
            } catch (error) {
                console.error('Error al verificar el correo electrónico:', error);
            }
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
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
            break;
    }
});

const inputPasswordDos= document.querySelector("#password2")
    inputPasswordDos.addEventListener("blur", function({target}) {
    switch (true) {
        case !this.value.trim():
            messageError(".passError2","Debes completar el campo con tu contraseña",target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        case this.value.trim() !== elemento("#password").value.trim():
            messageError(".passError2", "Las contraseñas no coinciden", target);
            this.style.borderColor = "red";
            this.style.backgroundColor = "rgba(255, 0, 0, 0.2)";
            break;
        default:
            validatorInput(".passError2", target);
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
            break;
    }
});

//HABILITAR O DESABILITAR ICONO PARA VER CONTRASEÑA
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
            this.style.borderColor= "green";//sino saca el msj de error y deja seguir con el formulario
            this.style.backgroundColor = "rgba(0, 255, 0, 0.1)";
            break;
    }
});


// $ es un atajo para el objeto jQuery. Cuando ves $(document),
// $(window), o $('<elemento>'), eso significa que se está utilizando
// jQuery para seleccionar o crear elementos en el DOM.
//https://www.youtube.com/watch?v=fQNjGsuNHIY     (video donde se saco la informacion y se adapto a nuestras validaciones)
$(document).ready(function() {
    $('#submitButton').click(function() {
        var response = grecaptcha.getResponse();
        if (response.length === 0) {
            $('.captchaError').text("Por favor, completa el captcha.");
            return false;
        } else {
            $('.captchaError').text(""); // Limpiar el mensaje de error
            return true; // Permitir el envío del formulario si el captcha está completo
        }
    });
});


const form = document.querySelector('.main__form__register');
const errorMessage = document.getElementById('error-message-registerUser');

form.addEventListener('submit', function(event) {
    // Captura los errores
    const nameError = document.querySelector('.nameError');
    const emailError = document.querySelector('.emailError');
    const passError = document.querySelector('.passError');
    const passError2 = document.querySelector('.passError2');
    const imageError = document.querySelector('.imageError');

    // Si alguno de los elementos tiene un error
    const hasError = nameError.innerText || emailError.innerText || passError.innerText || passError2.innerText || imageError.innerText;

    // Si alguno cumple con la condición, el formulario no se envía y muestra un mensaje
    if (hasError) {
        errorMessage.style.display = 'block'; // Muestra el mensaje de error
        event.preventDefault(); // Evita que el formulario se envíe
    } else {
        errorMessage.style.display = 'none'; // oculta el msj si no hay errores
        // Si no hay errores, muestra la alerta de SweetAlert
        Swal.fire({
            title: "¡Bienvenido a ARDIDAS!",
            text: "Gracias por Registrarte, te enviamos al Login",
            icon: "success",
            timer: 4000, // Duración en milisegundos
            showConfirmButton: false // No mostrar botón de confirmación
        }).then(() => {
            // Redirige al usuario después de 2 segundos
            window.location.href = "/users/login";
        });
    }
});
