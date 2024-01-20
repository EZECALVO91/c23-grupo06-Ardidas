const { setJson, getJson } = require("../utility/jsonMethod");
   
   function recuerdameMiddleware(req,res,next){

    next();

    if(req.cookies.recuerdame != undefined &&
    req.session.usuarioLogin == undefined){
        let users = getJson('users')
        for (let i = 0; i < users.length; i++) {
            if (users[i].email.toLowerCase() == req.cookies.recuerdame.toLowerCase()) {
                    usuarioLogin = users[i]
                    break;
                    }

                }
                req.session.usuarioLogin = usuarioLogin
            }
            
    }
    

    module.exports = recuerdameMiddleware