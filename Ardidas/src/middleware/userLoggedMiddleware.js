const session = require('express-session')
const { setJson, getJson } = require("../utility/jsonMethod");

const users = getJson('users')
const userLoggedMiddleware = (req,res,next) => {
    if (req.cookies.recuerdame){
        const userInCookie = req.cookies.recuerdame
        users.forEach(element => {
            if (element.email == userInCookie.email) {
                console.log('FUNCIONAAAA')
                req.session.usuarioLogin = userInCookie
            }
        });
        }
    next()

}
module.exports = userLoggedMiddleware