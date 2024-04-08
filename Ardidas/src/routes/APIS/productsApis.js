const express = require('express');
const router = express.Router();
const {list,  detail, create, update, destroy} = require('../../controllers/APIS/productsApisController')

const createProductValidation = require('../../validation/validationCreateProduct');

// const sessionValidate = require("../../middleware/sessionValidate");
const isAdmin = require("../../middleware/isAdminValidate");
const uploadImg = require ('../../validation/validationProductImg')


router
.get("/", list)

.get('/:id', detail)





module.exports = router;
