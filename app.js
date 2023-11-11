const express = require ("express");

const path = require ("path")

const app = express ();

const publicPath = path.resolve(__dirname, "public")

app.use (express.static(publicPath));

app.listen (3333, () => {
    console.log("Servidor corriendo en el puerto 3333");
});
app.get ("/", function(req,res){
    res.sendFile(path.join (__dirname, "/views/index.html"))
});

app.get ("/login", function(req,res){
    res.sendFile(path.join (__dirname, "/views/login.html"))
});

app.get ("/registro", function(req,res){
    res.sendFile(path.join (__dirname, "/views/register.html"))
});

app.get ("/carrito", function(req,res){
    res.sendFile(path.join (__dirname, "/views/productCart.html"))
});
app.get ("/detalle", function(req,res){
    res.sendFile(path.join (__dirname, "/views/productDetail.html"))
});