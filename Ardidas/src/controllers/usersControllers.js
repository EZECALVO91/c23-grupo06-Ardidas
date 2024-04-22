const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const db = require("../database/models");
const { Op } = require("sequelize");

const usersController = {
// -------------------REGISTER----------------------------------------------------------------------------------------------------------

formRegister: (req, res) => {
      res.render("./users/register", { title: "Registro | Ardidas", usuarioLogeado: null }); // vista del formulario de registro.
    },

    register: (req, res) => {
      const errores = validationResult(req); // registro directo a la base de datos.
      if(errores.isEmpty()) {
        const file =req.file;
        const { name, email, password} =req.body;
        db.User.create({
          name ,
          email ,
          password:bcrypt.hashSync(password, 10),
          image:file ? file.filename : "default-avatar-profile.jpg",
          id_category:2,
          createdAt:new Date(),
        })
          .then(() => {
              // res.redirect("/users/login"); 
      //SE COMITIO EL REDIRECT PARA QUE FUNCIONE EL SWEET ALERT DESPUES DEL REGISTRO
      //ESTA EN LAS VALIDACIONES DEL FRONT REGISTRO.
          })
            .catch((error) => console.log(error));
      }else{
        return res.render("./users/register", {errores: errores.mapped(),old: req.body,title: "Registro | ERROR",usuarioLogeado: null,
        });
      }
    },

// -------------------LOGIN----------------------------------------------------------------------------------------------------------

formLogin: (req, res) => {
      res.render("./users/login", {title: "Login | Ardidas",usuarioLogeado: req.session.usuarioLogin,}); // vista de formulario de login.
    },

login: (req, res) => {
      const errores = validationResult(req); // logueo de cuenta mas cookis para guardar en las vistas.
      if (!errores.isEmpty()) {
        // console.log("errores:", errores.mapped());
        res.render("./users/login", {errores: errores.mapped(),title: "Login | ERROR",usuarioLogeado: req.session.usuarioLogin,});
      }else{
        const { email } = req.body;
        db.User.findOne({
          attributes: { exclude: ["password"] },
          where: { email },
        })
          .then((user) => {
            // console.log("user info:", user);
            req.session.usuarioLogin = user.dataValues;
            if (req.body.recuerdame == "true") {
              const cookieUser = {
                id: user.dataValues.id,
                email: user.dataValues.email,
                id_category: user.dataValues.id_category,
                image: user.dataValues.image,
                name: user.dataValues.name
              };
              res.cookie("user", cookieUser, { maxAge: 1000 * 60 * 15 });
              res.cookie("recuerdame", "true", { maxAge: 1000 * 60 * 15 });
            }
            res.redirect("/");
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },

// -------------------LOGOUT----------------------------------------------------------------------------------------------------------

logout: (req, res) => {
      req.session.destroy(); // desloguea la sesion y termina todas las cookis.
      if (req.cookies.recuerdame) {
        res.clearCookie("user");
        res.clearCookie("recuerdame");
      }
      res.redirect("/");
    },

// -----------PROFILE USUARIO------------------------------------------------------------------------------------------------------------------

userProfile: (req, res) => {
      // vista del formulario para que el usuario pueda editar su perfil.
      const { id } = req.params;
      db.User.findByPk(req.session.usuarioLogin.id)
        .then((response) => {
          res.render("users/profileEdit", {title: "Editar perfil | Ardidas",usuarioLogeado: response.dataValues,});
        })
        .catch((err) => console.log(err));
    },

userProfileEdit: (req, res) => {
      const errores = validationResult(req);
      if (!errores.isEmpty()) {
        db.User.findByPk(req.session.usuarioLogin.id)
          .then((respons) => {
            res.render("users/profileEdit", {errores: errores.mapped(),old: req.body,title: "Editar perfil | ERROR",usuarioLogeado: respons.dataValues,});
          })
          .catch((err) => console.log(err));
      }else{
        const {id}=req.params;
        const {name, category, date, locality, aboutMe } = req.body;
        const file = req.file;
        db.User.findByPk(id)
          .then((newUser) => {
            if (!newUser) {
              throw new Error("El usuario no está registrado");
            }if(
              file &&
              file !== newUser.image &&
              newUser.image !== "default-avatar-profile.jpg"
            ){
              const rutaImg = path.join(__dirname,"../../public/images/users/",newUser.image);
              fs.unlinkSync(rutaImg);
            }
            const nuevoProfile = {
              name,
              category,
              date: date ? date : null,
              locality: locality ? locality : null,
              aboutMe: aboutMe ? aboutMe : null,
              image: file ? file.filename : newUser.image,
              updatedAt: new Date(),
            };
            return newUser.update(nuevoProfile);
          })
          .then((updatedProfile) => {
            req.session.usuarioLogin = updatedProfile;
            res.cookie("user", updatedProfile, { maxAge: 1000 * 60 * 15 });
            res.redirect(`/users/profile/${id}`);
          })
          .catch((error) => {
            console.log(error);
            res.status(400).send("error en el servidor");
          });
      }
    },


// ---------------ACA EMPIEZA EL DASHBOARD--------------------------------------------------------------------------------------------------------------

UsersDashboard: async (req, res) => {
    try {
        const pageUsers = 9; // Define la cantidad de usuarios por página
        const currentPage = req.query.page ? parseInt(req.query.page) : 1;
        const startIndex = (currentPage - 1) * pageUsers;

        // Consulta los usuarios para la página actual y obtiene el total de usuarios
        const [users, totalUsers] = await Promise.all([
            db.User.findAll({
                where: { id: { [Op.ne]: req.session.usuarioLogin.id } },
                include: [{ model: db.Category, as: 'Categories' }],
                limit: pageUsers,
                offset: startIndex,
            }),
            db.User.count({ where: { id: { [Op.ne]: req.session.usuarioLogin.id } } }),
        ]);

        const totalPages = Math.ceil(totalUsers / pageUsers); // Calcula el total de páginas

        res.render("users/usersDashboard", {
            title: "Dashboard usuarios | Ardidas",
            usuarioLogeado: req.session.usuarioLogin,
            users,
            currentPage,
            totalPages,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send("Error al cargar los usuarios");
    }
},

  
    //Dashboar crear usuarios con provilegios
createPrivileges: (req, res) => {
      // vista de la creacion de usuario desde el dashboard.
      res.render("users/userCreatePrivi", {title: "Crear administrador | Ardidas",usuarioLogeado: req.session.usuarioLogin,});
    },

createUserPrivileges: (req, res) => {
      const errores = validationResult(req);
      // console.log("errores:", errores);
      if (!errores.isEmpty()) {
        // creacion de usuarios desde el dashboard.
        // console.log("Ingrese en errores");
        res.render("users/userCreatePrivi", {errores: errores.mapped(),old: req.body,title: "Crear administrador | ERROR",usuarioLogeado: req.session.usuarioLogin,});
      } else {
        const file = req.file;
        const { name, email, password, id_category } = req.body;
        db.User.create({
          name,
          email,
          password: bcrypt.hashSync(password, 10),
          image: file ? file.filename : "default-avatar-profile.jpg",
          id_category,
          createdAt: new Date(),
        }).then(() => {res.redirect("dashboard");
        });
      }
    },

usersEdit: (req, res) => {
      const { id } = req.params;
      db.User.findByPk(req.params.id) // vista de edicion de usuario desde el dashboard.
        .then((user) => {
          res.render("users/usersEdit", {title: "Editar usuario | Ardidas",user,usuarioLogeado: req.session.usuarioLogin,});
        })
        .catch((err) => console.log(err));
    },

usersUpdate: (req, res) => {
      const errores = validationResult(req); // edicion de usuario desde el dashboard.
      // console.log("errores:", errores);

      const { id } = req.params;
      db.User.findByPk(req.params.id)
        .then((user) => {
          if (!errores.isEmpty()) {
            // console.log("Ingrese en errores");
            res.render("users/usersEdit", {errores: errores.mapped(),old: req.body,title: "Editar usuario | Ardidas",user,usuarioLogeado: req.session.usuarioLogin,});
          } else {
            const { id } = req.params;
            const { name, image, id_category } = req.body;
            const file = req.file;
            db.User.update({
                name,
                id_category,
                image: file ? file.filename : image,
                updatedAt: new Date(),
              },{ where: { id } })
              .then(() => {
                res.redirect(`/users/update/${id}`);
              })
              .catch((err) => console.log(err));
            }})
        .catch((err) => console.log(err));
    },

// --------------DESTROY DASHBOAD---------------------------------------------------------------------------------------------------------------

destroy: (req, res) => {
      db.User.findOne({
        where: { id: req.params.id },
      }) // borra usuarios (no es un delete soft)
        .then((user) => {
          return db.User.destroy({
            where: { id: req.params.id },
          }).then(() => {
            if (user.image && user.image !== "default-avatar-profile.jpg") {
              const imagePath = path.join(__dirname,"../../public/images/users",user.image);
              fs.unlinkSync(imagePath);
              // console.log(`BORRE LA IMAGEN: ${user.image}`);
            }
            res.redirect("/users/dashboard");
          });
        })
        .catch((err) => console.log(err));
    },
};

module.exports = usersController;
