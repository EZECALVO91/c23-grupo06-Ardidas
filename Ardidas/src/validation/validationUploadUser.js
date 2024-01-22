const multer = require('multer');
const path = require("path");


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.join(__dirname, "../../public/images/users"))
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}_img_${path.extname(file.originalname)}`)
    }
})



const fileFilter = (req,file,cb) => { 
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif|webp)$/)){
        req.validatorerrorImage = "Hay un error... No es una imagen"
        return cb(null,false,req.validatorerrorImage)
    }

return cb(null,true)

}

const uploadFile = multer({storage,
    fileFilter
})

 module.exports=uploadFile;