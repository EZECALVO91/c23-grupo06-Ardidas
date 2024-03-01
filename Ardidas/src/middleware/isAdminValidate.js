const isAdminValidate = (req, res, next) => {
    if (req.session.usuarioLogin && req.session.usuarioLogin.id_category == 1) {
        next();
    } else {
        res.redirect("/");
    }

}

module.exports = isAdminValidate;