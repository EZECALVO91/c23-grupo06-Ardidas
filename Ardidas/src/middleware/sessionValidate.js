const sessionValidate = (req, res, next) => {
    if (req.session.usuarioLogin) {
        next()
    } else {
        res.redirect("/users/login");
    }

}

module.exports = sessionValidate