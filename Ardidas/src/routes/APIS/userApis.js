const express = require('express');
const router = express.Router();
const isAdmin = require('../../middleware/isAdminValidate');
const registerValidation = require('../../validation/validationRegisterApi');
const validationUpdate = require('../../validation/validationUpdateApi');
const {register ,allUsers, userId, updateUser, deleteUser} = require('../../controllers/APIS/userApis');

router
// Registro de usuario
.post('/register', registerValidation, register)

// Obtener todos los usuarios
.get('/allUsers', allUsers)

// Obtener un usuario por su ID
.get('/users/:id', userId)

// Actualizar información de usuario por su ID
.get('/updateUser/:id', userId)
.put('/updateUser/:id',validationUpdate , updateUser)

// Eliminar usuario por su ID
.delete('/usersDelete/:id', deleteUser)

module.exports = router;