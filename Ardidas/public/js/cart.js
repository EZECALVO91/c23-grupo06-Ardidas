document.addEventListener("DOMContentLoaded", function () {
  const sectionCart = document.getElementById("cart");
  const sectionPagoCart = document.getElementById("cart_sectionPago");

  const productInfoJSON = sessionStorage.getItem("productsInCart");
  console.log("Que llega en carrito y en que formato: ", productInfoJSON);

  if (productInfoJSON) {
    const productInfo = JSON.parse(productInfoJSON);
    const imageCart = document.getElementById("image_cart");
    const nameCart = document.getElementById("productCart-article-nombre");
    const priceCart = document.getElementById("productCart-article-precio");
    const cantidadCart = document.getElementById(
      "productCart-article-cantidad"
    );
    const colorCart = document.getElementById("productCart-article-color");
    const talleCart = document.getElementById("productCart-article-talle");

    const precioFinal = document.getElementById("productCart-precio-total");
    for (i = 0; i < productInfo.length; i++) {

    
    imageCart.src = productInfo[i].image;
    nameCart.innerText = productInfo[i].name;
    priceCart.innerText = productInfo[i].price;
    cantidadCart.value = productInfo[i].quantity;
    colorCart.innerText += productInfo[i].color;
    talleCart.innerText += productInfo[i].size;

    precioFinal.innerText += productInfo[i].price * productInfo[i].quantity;

    console.log("Info del producto:", productInfo[i].price);
  }
    const borrarDelCarrito = document.getElementById(
      "productCart-article-borrar"
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
