document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('promoBancariaBoton');
    
    if (boton) {
        boton.addEventListener('click', abrirImagen);
    }
    
});

function abrirImagen() {

Swal.fire({
    imageUrl: "https://nikearprod.vtexassets.com/arquivos/promotions-modal-content-image.png",
    imageHeight: "auto",
    imageWidth: "100%",
    imageAlt: "Promociones bancarias",
    background: 'transparent',
    
    showConfirmButton: false,
    customClass: {
        popup: 'my-responsive-popup',
        content: 'my-responsive-content',
    }
  }
)
}