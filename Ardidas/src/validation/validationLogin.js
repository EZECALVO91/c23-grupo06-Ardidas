const {body} = require('express-validator');
const bcrypt = require('bcryptjs');
const db = require ("../database/models")


module.exports = [
    body('email').notEmpty().withMessage("El campo no puede estar vacio").bail()
    .isEmail().withMessage("Formato incorrecto, revise escritura.").bail()
    .custom(value => {
        return db.User.findOne({
                where: {email: value}
            }).then(user => {
                if (!user) {
                    return Promise.reject('*Email no registrado*')}
            }).catch(() => {
                return Promise.reject('*Email no registrado*')})
    }),

    body('password').notEmpty().withMessage("*El campo no puede estar vacio*").bail()
    .custom((value, {req}) => {
        return db.User.findOne({
                where: {email: req.body.email}
            }).then(user => {
                if (!bcrypt.compareSync(value, user.dataValues.password)) { 
                    return Promise.reject('*Mal tipeo de contraseña*')}
            }).catch(() => {
                return Promise.reject('*Contraseña incorrecta*')
            })
        })
];