const isAdminValidate = (req,res,next) => {
    if (req.session.usuarioLogin && req.session.usuarioLogin.id_category == 2) {
        next();
    } else {
        res.redirect("/");
    }
   
}

module.exports = isAdminValidate;