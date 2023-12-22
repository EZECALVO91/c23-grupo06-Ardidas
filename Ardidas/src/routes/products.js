const express = require('express');
const router = express.Router();
const {index, productCart, productDetail, dashboard, productLoad, create, productEdit, update, destroy} = require('../controllers/productsControllers')
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
    destination: (req,file,cb) => {
        cb(null, path.join(__dirname, "../../public/images"))
    },
    filename: (req, file, cb) => {
        cb(null,`${Date.now()}_img_${path.extname(file.originalname)}` )
    }
})

const uploadFile = multer({ storage})



router
.get("/", index)

.get('/carrito/:id', productCart)

.get('/detalle/:id', productDetail)

.get('/dashboard', dashboard)

.get("/create",productLoad)
.post("/",uploadFile.single("image"), create)

.get("/update/:id", productEdit)
.put("/update/:id", update)

.delete('/delete/:id', destroy)



module.exports = router;

