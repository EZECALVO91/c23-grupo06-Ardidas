const userLoggedMiddleware = (req, res, next) => {
    if (req.cookies.recuerdame && req.cookies.user) {
        req.session.usuarioLogin = req.cookies.user;
    }
    next();
}
module.exports = userLoggedMiddleware