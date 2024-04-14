document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('promoBancariaBoton');
    
    if (boton) {
        boton.addEventListener('click', abrirImagen);
    }
    
});

function abrirImagen() {

Swal.fire({
    imageUrl: "https://nikearprod.vtexassets.com/arquivos/promotions-modal-content-image.png",
    imageHeight: 300,
    imageAlt: "Promociones bancarias"
  });
}