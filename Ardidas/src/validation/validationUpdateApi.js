const { body } = require('express-validator');
const db = require("../database/models");

module.exports = [
    //input: name
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

    //Input:Image Multer (el req.errorImgProfile es un msj creado en la validacion de multer.)
    body('image').custom((value, { req }) => {
        if (req.errorImgProfile) {
            return false;
        };
        return true;
    }).withMessage("Esta imagen no tiene un formato valido"),

    
];