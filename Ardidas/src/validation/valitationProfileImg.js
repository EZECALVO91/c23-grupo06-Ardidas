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

const fileFilter = (req,file,cb)=>{
    const filtro =   /\.(jpg|jepg|png|gif|webp|svg)$/
    if(filtro.test(file.originalname)){
     // To accept this file pass `false`, like so:
    cb(null, true)
    }else{    
     // To reject the file pass `true`, like so:
     req.errorImgProfile = "*Esta imagen no tiene un formato valido*"
    cb(null, false)
    }
}

// const fileFilter = (req,file,cb)=>{
//     if(file.originalname.match(/\.(jpg|jepg|png|gif|webp|svg)$/)){
//         req.errorImgProfile = "*Esta imagen no tiene un formato valido*"
//         return cb(null,false,req.errorImgProfile)
//     }
//     return cb(null,true)
// }




module.exports = multer({ storage, fileFilter})


