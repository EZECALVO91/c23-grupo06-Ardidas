const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../../database/models");

const usersController = {
    register: async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const respuesta = {
                    meta:{
                    message: "Error al crear usuario",
                    url: "/api/register",
                    errors: errors.array()
                    }
                }
                return res.json(respuesta);
            }

            const { name, email, password } = req.body;
            await db.User.create({
                name,
                email,
                password: bcrypt.hashSync(password, 10),
                image:"default-avatar-profile.jpg",
                id_category: 2,
                createdAt: new Date(),
            })
                .then(registro => {
                    const respuesta = {
                        meta:{
                        message: "Usuario creado con exito",
                        url: "/api/register",
                        total:registro 
                        }
                    }
                res.json(respuesta);
            })
            
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Error a la carga de Datos" });
        }
    },


    allUsers: async (req, res) => {
        try {
            const users = await db.User.findAll();
    
            
            const usersMap = users.map(user => {// mapeo los usuarios para sacar algunos datos
                const userModificade = { ...user.toJSON() };
                delete userModificade.id_category;
                delete userModificade.password;
                delete userModificade.date;
                delete userModificade.locality;
                delete userModificade.aboutMe;
                delete userModificade.createdAt;
                delete userModificade.updatedAt;
                delete userModificade.image;
                userModificade.url = `/api/users/${userModificade.id}`
                return userModificade;
            });
            const countUsers = usersMap.length; //con esto se cuantos usuarios hay en la lista.

            let respuesta = {
                meta:{
                    status: 200,
                    url: "/api/users",
                    count: countUsers,
                    total: usersMap
                },
                
            };
    
            res.json(respuesta);
        } catch (error) {
            const respuestaError = {
                meta:{
                    status: 404,
                    url: "/api/users",
                    error: "Error en el Servidor",
                }
            };
            console.log(error);
            res.status(500).json(respuestaError); // Enviar el estado 500 y la respuesta de error
        }
    },


    userId: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await db.User.findByPk(id, {
                attributes: {
                    exclude: ['password', 'id_category'] // sacar los atributos password y id_category
                }
            });

            if (!user) {
                return res.status(404).json({ error: "No existe un usuario con id: " + id });
            }
            
            let respuesta = {
                meta: {
                    status: 200,
                    url: "/api/users/:id",
                    total: { ...user.toJSON(), url_image: `http://localhost:3000/images/users/${user.image}`},
                }
            };
            res.json(respuesta);
    
        } catch (error) {
            console.log(error);
            res.status(500).json({ error: "Error en el Servidor" });
        }
    },


    updateUser :async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                const respuesta = {
                    meta: {
                        url: "/updateUser/:id",
                        message: "Error al querer actualizar el usuario.",
                        errors: errors.array()
                    }
                }
                return res.json(respuesta);
            }
        const { id } = req.params;
        const { name, email, date, locality, aboutMe, id_category } = req.body;
    
        const [updatedRows] = await db.User.update({
            name,
            email,
            date,
            locality,
            aboutMe,
            id_category
        }, { where: { id } });
    
        let respuesta;
        if (updatedRows > 0) {
                respuesta = {
                    meta: {
                        message: "Usuario actualizado con éxito, ¡Felicitaciones!",
                        url: "/updateUser/:id",
                        total: updatedRows
        },
            data: {
                    id,
                    name,
                    email,
                    date,
                    locality,
                    aboutMe,
                    id_category
                    }
                }
            } else {
                respuesta = {
                    meta: {
                        status: 204,
                        message: "El usuario no fue encontrado o no se realizó ninguna actualización.",
                        url: "/updateUser/:id",
                        total: updatedRows
                    },
                    data: null
                }
            }
            res.json(respuesta);
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Error en la carga de datos" });
        }
    },

    deleteUser: async (req, res) => {
        try {
            const { id } = req.params;
            const user = await db.User.findByPk(id);
    
            if (!user) {
                const respuesta = {
                    meta:{
                        status: 400,
                        url: "/api/deleteUser/:id",
                        total: user,
                        error:"Este usuario no existe, busca el ID correcto para continuar1" 
                    }
                }
                return res.json(respuesta);
            }
            const result = await db.User.destroy({
                where: { id }
                });
                if (result === 0) {
                return res.status(404).json({ error: "Este usuario no existe, busca el ID correcto para continuar2" });
            }
                    if (user.image && user.image !== "default-avatar-profile.jpg") {
                    const imagePath = path.join(__dirname, "../../public/images/users", user.image);
                    fs.unlinkSync(imagePath);
                    console.log(`BORRE LA IMAGEN: ${user.image}`);
            }
            const respuesta = {
                meta:{
                    status: 200,
                    url: "/api/deleteUser/:id",
                    total: user,
                    message: "¡Felicitaciones el usuario eliminado con exito!"
                }
            }
            res.json(respuesta);
        } catch (error) {
            console.log(error);
            res.status(404).json({ error: "Error en el borrado de los datos, intenta de nuevo" });
        }
    }
};

module.exports = usersController;