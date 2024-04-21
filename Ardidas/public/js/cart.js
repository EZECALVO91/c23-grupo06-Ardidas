document.addEventListener("DOMContentLoaded", function () {
  const sectionCart = document.getElementById("cart");
  const sectionPagoCart = document.getElementById("cart_sectionPago");


  const productInfoJSON = sessionStorage.getItem("productsInCart");
  console.log("Que llega en carrito y en que formato: ", productInfoJSON);

  if (productInfoJSON) {
    const productInfo = JSON.parse(productInfoJSON);
    const listaProductsCart = document.getElementById("listaProductsCart");

    let sumaTotal = 0 

    for (i = 0; i < productInfo.length; i++) {
      

      const article = document.createElement("article");
      article.setAttribute("class", "productCart-main-section-principal-article");

      const imgDiv = document.createElement("div");
      imgDiv.setAttribute("class", "productCart-main-section-principal-article-div-1");
      imgDiv.style.position = "relative"
      const imageCart = document.createElement("img");
      imageCart.src = productInfo[i].image;
      imgDiv.appendChild(imageCart);
    
      article.appendChild(imgDiv);

      const detalles = document.createElement("div")
      detalles.setAttribute("class", "productCart-main-section-principal-article-div-2")

      article.appendChild(detalles);


      const nombre = document.createElement("p")
      nombre.setAttribute("id", "productCart-article-nombre")
      nombre.innerText = productInfo[i].name;

      detalles.appendChild(nombre)

      const cantidad = document.createElement("input")
      cantidad.setAttribute("id", "productCart-article-cantidad")
      cantidad.value = productInfo[i].quantity;

      detalles.appendChild(cantidad)

      const precio = document.createElement("p")
      precio.setAttribute("id", "productCart-article-precio")
      precio.innerText = productInfo[i].price;

      detalles.appendChild(precio)

      const color = document.createElement("p")
      color.setAttribute("id", "productCart-article-color")
      color.innerText = `Color:  ${productInfo[i].color}`;

      detalles.appendChild(color)

      const talle = document.createElement("p")
      talle.setAttribute("id", "productCart-article-talle")
      talle.innerText = `Talle:  ${productInfo[i].size}`;

      detalles.appendChild(talle)

      const borrar = document.createElement("a")
      borrar.setAttribute("id", `productCart-article-borrar${[i]}`)
      borrar.innerHTML = '<i class="fa-solid fa-trash-can" style="color:black;z-index:1;position:absolute;right:10px;top:2px" ></i>';

      imgDiv.appendChild(borrar)

     


      listaProductsCart.appendChild(article);

    sumaTotal += (productInfo[i].price * productInfo[i].quantity);
      
    console.log("Info del producto:", productInfo[i].price);
    console.log("total: ", sumaTotal)
  

  const total = document.getElementById("productCart-precio-total")
      total.innerText = sumaTotal;



    const borrarDelCarrito = document.getElementById(
      `productCart-article-borrar${[i]}`
    );
    
    borrarDelCarrito.addEventListener("click", function () {
      console.log("Borraste el productoooooo");
      sessionStorage.removeItem("productsInCart");
      console.log("No hay info en sessionStorage.");
      sectionCart.style.display = "none";
      sectionPagoCart.style.display = "none";
      const main = document.getElementById("root");
      const container = document.createElement("div");
      container.style.height = "30vh";
      const p = document.createElement("p");
      p.setAttribute("class", "text-center alert alert-warning py-5");
      p.textContent = `Borraste todos los productos del Carrito`;

      main.appendChild(container);
      container.appendChild(p);

      const div = document.createElement("div");
      div.setAttribute("class", "productCart-main-section-secundario-div-2");
      const a = document.createElement("a");
      a.setAttribute("href", "/");
      a.setAttribute("id", "button-seguir-comprando-productCart");
      a.textContent = `VOLVER AL HOME`;
      a.style.textAlign = "center";
      a.style.color = "#FCFCE7";
      a.style.background = "black";

      main.appendChild(div);
      div.appendChild(a);
    });
  }
  } else {
    console.log("No hay productos en el carrito");
    sectionCart.style.display = "none";
    sectionPagoCart.style.display = "none";

    const main = document.getElementById("root");
    const container = document.createElement("div");
    container.style.height = "30vh";

    const p = document.createElement("p");
    p.setAttribute("class", "text-center alert alert-warning py-5");
    p.textContent = `No hay productos en el carrito`;

    main.appendChild(container);
    container.appendChild(p);

    const div = document.createElement("div");
    div.setAttribute("class", "productCart-main-section-secundario-div-2");

    const a = document.createElement("a");
    a.setAttribute("href", "/");
    a.setAttribute("id", "button-seguir-comprando-productCart");
    a.textContent = `VOLVER AL HOME`;
    a.style.textAlign = "center";
    a.style.color = "#FCFCE7";
    a.style.background = "black";

    main.appendChild(div);
    div.appendChild(a);
  }
});
