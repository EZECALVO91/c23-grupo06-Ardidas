
const { setJson, getJson} = require("../utility/jsonMethod");

const usersController = {
    formRegister:(req,res)=>{
        res.render('./users/register',{title:"Registro"})
    },
    register:(req,res) => {
        const file = req.file
        const user = getJson("users");
        const id = user[user.length - 1].id + 1;

        const { name, email, password } = req.body;

        const newUser = {
            id,
            name,
            email,
            password,
            category: "ADMIN",
            image: file ? file.filename : "default-avatar-profile.jpg",
        };

        const newJson = [...user, newUser];
        setJson(newJson, "users");
            
        
        res.redirect("/users/login")
    },
    formLogin:(req,res)=>{
            res.render('./users/login',{title:"Login"})
    },
    login: (req,res) => {
        console.log(req.body)
        res.redirect("/")
    },
        //Edicion de usuarios
    usersEdit: (req, res) => {
        const { id } = req.params;
        const users = getJson("users");
        const user = users.find(elemento => elemento.id == id);
        res.render("users/usersEdit", { title: "Editar Usuario", user })
    },
    usersUpdate: (req, res) => {
        const { id } = req.params;
        const users = getJson("user");
        const { name, email, password} = req.body;
        const nuevoArray = users.map(product => {
            if (product.id == id)
                return {
                    id: +id,
                    nombre: nombre.trim(),
                    talles: talles >= 1 ? [talles] : talles,
                    color :Array.isArray(color) ? color : [color],
                    precio: +precio,
                    descripcion: descripcion.trim(),
                    imagen: imagen ? imagen : product.imagen,
                    category,
                }

            return product
        })
        setJson(nuevoArray, "product")
        res.redirect(`/products/detalle/${id}`);
    },

    //Dashboard de Usuarios

    UsersDashboard: (req, res) => {
        const users = getJson("users");
        res.render('users/usersDashboard', { title: "Users Dashboard", users });
    },
    
}
module.exports = usersController;