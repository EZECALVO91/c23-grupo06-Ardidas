console.log("holiiiiii")

const productInfoJSON = sessionStorage.getItem("productInfo");

if (productInfoJSON) {
  const productInfo = JSON.parse(productInfoJSON);
  const imageCart = document.getElementById("image_cart")
  const nameCart = document.getElementById("productCart-article-nombre")
  const priceCart = document.getElementById("productCart-article-precio")
  const cantidadCart = document.getElementById("productCart-article-cantidad")
  const colorCart = document.getElementById("productCart-article-color")
  const talleCart = document.getElementById("productCart-article-talle")

  const precioFinal = document.getElementById("productCart-precio-total")

  window.onload = function(){
  imageCart.src = productInfo.image
  nameCart.innerText = productInfo.name
  priceCart.innerText = productInfo.price
  cantidadCart.value = productInfo.quantity
  colorCart.innerText += productInfo.color
  talleCart.innerText += productInfo.size

  precioFinal.innerText += (productInfo.price * productInfo.quantity)
  }

  console.log("Info del producto:", productInfo.price);

  const borrarDelCarrito = document.getElementById("productCart-article-borrar")
  borrarDelCarrito.addEventListener("click", function (){
    console.log("Borraste el productoooooo");
    imageCart.src = ""
    nameCart.innerText = ""
    priceCart.innerText = ""
    cantidadCart.value = ""
    colorCart.innerText = ""
    talleCart.innerText = ""
  
    precioFinal.innerText = ""
  })

} else {
  console.log("No hay info en sessionStorage.");
}

// window.onload = () => {
//     const app = document.getElementById("root");
//     const container = document.createElement("div");
//     container.setAttribute("class", "container");
//     app.appendChild(container);
  
//     // Aqui debemos agregar nuestro fetch
//     fetch('http://localhost:3000/api/products')
//     .then(function(response){
//         return response.json()
//     })
//     .then((peliculas)=>{
//        console.log(peliculas.meta.products)
//       let data = peliculas.meta.products;
  
//       data.forEach((movie) => {
//         const card = document.createElement("div");
//         card.setAttribute("class", "card");
  
       
  
//         const h1 = document.createElement("h1");
//         h1.textContent = movie.name;
  
//         const p = document.createElement("p");
//         p.textContent = `Rating: ${movie.description}`;
  
//         const duracion = document.createElement("p");
//         duracion.textContent = `Duración: ${movie.length}`;
  
//         const toForm = document.createElement("a")
//         toForm.textContent = "Editar";
//         toForm.setAttribute("href", `/form/${movie.id}`)
       
  
//         container.appendChild(card);
//         card.appendChild(h1);
//         card.appendChild(p);
        
//         card.appendChild(duracion);
//         card.appendChild(toForm);
   
  
//       });
//     })
//   };
  