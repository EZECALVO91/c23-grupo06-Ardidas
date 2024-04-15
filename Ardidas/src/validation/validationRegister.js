const { body } = require('express-validator');
const { isAlpha } = require('validator');
const db = require("../database/models");

module.exports = [
    body('name').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isLength({ min:6, max: 30 }).withMessage("El valor ingresado debe tener un mínimo de 6 y máximo de 30 caracteres").bail()
    .custom(value => {
        // Expresión regular para verificar si el valor contiene solo letras
        const expresionRegular = /^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/;
        if (!expresionRegular.test(value)) {
            throw new Error("El campo solo puede contener letras");
        }
        return true;
    }),

    body('email').notEmpty().withMessage("El campo no puede estar vacio").bail()
        .isEmail().withMessage('Debe ser un correo con formato valido').bail()
        .custom(value => {
            return db.User.findOne({
                where: {
                    email: value
                }
            })
                .then(user => {
                    if (user) {
                        return Promise.reject('El email se encuentra registrado')
                    }
                })
                .catch(() => {
                    return Promise.reject('El email se encuentra registrado')
                })
        }),

body('password').notEmpty().withMessage("El campo no puede estar vacio").bail()
.isLength({ min: 6, max: 20 }).withMessage("Contraseña mínimo (6) a máximo (20) caracteres").bail()
.matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&.,;'" ])[A-Za-z\d$@$!%*?&.,;'" ]{6,20}$/).withMessage("Debes incluir números, mayúscula, minúscula y  un caracter especial(d$@$!%*?&.,;')")
.custom((value, { req }) => {
    return value == req.body.password2;
}).withMessage("Los passwords no coinciden"),

body('image').custom((value, { req }) => {
        if (req.errorImgProfile) {
            return false;
        };
        return true;
    }).withMessage("Esta imagen no tiene un formato valido"),

   // Nueva validación para el token reCAPTCHA
body('g-recaptcha-response').custom(async (value, { req }) => {
    const secretKey = process.env.SECRET_KEY;
    
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${value}`, {
        method: 'POST'
    });

    const data = await response.json();

    if (!data.success) {
        throw new Error('Fallo en la verificación reCAPTCHA');
    }

    return true;
}).withMessage("No olvides validar el reCAPTCHA")

];
