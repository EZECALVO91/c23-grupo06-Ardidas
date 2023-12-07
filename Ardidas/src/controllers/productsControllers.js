const products = [{
    id:1,
    nombre: "Nike Revolution 6",
    talle: 42,
    color: "Negro",
    descripcion: "zapatillas nike ultimo modelo 2023",
    precio: 110000,
    imagen: "nike8.webp"
},
{
    id:2,
    nombre: "Nike Revolution 6",
    talle: 40,
    color: "Rosado",
    descripcion: "zapatillas nike ultimo modelo 2023",
    precio: 110000,
    imagen: "nike6.webp"
},
{
    id:3,
    nombre: "Nike Air Max",
    talle: 38,
    color: "Negro",
    descripcion: "zapatillas nike ultimo modelo 2023",
    precio: 90000,
    imagen: "nike5.webp"
},
{
    id:4,
    nombre: "Nike Zoom",
    talle: 39,
    color: "Azul",
    descripcion: "zapatillas nike ultimo modelo 2023",
    precio: 75000,
    imagen: "nike6.webp"
},
{
    id:5,
    nombre: "Nike Revolution 6",
    talle: 42,
    color: "varios colores para elegir",
    descripcion: "zapatillas nike ultimo modelo 2023",
    precio: 110000,
    imagen: "nike7.webp"
},
{
    id:6,
    nombre: "Nike Air Max",
    talle: 38,
    color: "Negro",
    descripcion: "zapatillas nike ultimo modelo 2023",
    precio: 90000,
    imagen: "nike8.webp"
},
{
    id:7,
    nombre: "Nike Revolution 6",
    talle: 42,
    color: "varios colores para elegir",
    descripcion: "zapatillas nike ultimo modelo 2023",
    precio: 110000,
    imagen: "nike5.webp"
},
{
    id:8,
    nombre: "Nike Air Max",
    talle: 38,
    color: "Negro",
    descripcion: "zapatillas nike ultimo modelo 2023",
    precio: 90000,
    imagen: "nike6.webp"
}]

const productsController ={
    productCart:(req,res)=>{
        res.render('./products/productCart',{title:"Carrito"})
    },
    productDetail:(req,res)=>{
        res.render('./products/productDetail',{title:"Detalle",products})
    },
    
    dashboard:(req, res) => {
        res.render('products/dashboard', { title: "Dashboard", products });
    }
}

module.exports = productsController;