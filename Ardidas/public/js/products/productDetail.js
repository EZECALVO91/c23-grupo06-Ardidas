 //Capturo toda la información del producto
 const addButton = document.getElementById("buttonAdd")
 const imageProduct = document.getElementById("imagenGrande")
 const nameProduct = document.getElementById("name_product")
 const priceProduct = document.getElementById("price_product")
 const sizeProduct = document.getElementById("size_product")
 const colorProduct = document.getElementById("color_product")
 const cantidadProduct = document.getElementById("cantidad_product")
//  const listaCarrito = []
 
 //Armo un evento para que cuando clickee, me traiga por consola todos los datos
 addButton.addEventListener("click", function (e){
    // e.preventDefault()

   console.log("clickeaste el addCart")
   console.log("Que llega en la imagen:",imageProduct.src)
   console.log("nombre: ", nameProduct.innerText)
   console.log("precio: ", priceProduct.innerText)
   console.log("talles??: ", sizeProduct.value)
   console.log("color: ", colorProduct.innerText)
   console.log("cantidad??: ", cantidadProduct.value)

   const productInfo = {
   image: imageProduct.src,
   name: nameProduct.innerText,
   price: priceProduct.innerText,
   size: sizeProduct.value,
   color: colorProduct.innerText,
   quantity: cantidadProduct.value
 };

  const productInfoJSON = JSON.stringify(productInfo);
  // const holi = listaCarrito.push(productInfoJSON)
  // console.log("HOli", holi)
// Guardo la info en sessionStorage 

sessionStorage.setItem("productInfo", productInfoJSON);

// console.log("Info del produtco en sessionStorage:", holi);
});
 