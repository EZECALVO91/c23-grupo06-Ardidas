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

const uploadFile = multer({ 
    storage,
     fileFilter: function(_req, file, cb) {
         let type = file.mimetype.startsWith("image");
         type ? cb(null, true) : cb(null, false)
     }
})


 module.exports=uploadFile;