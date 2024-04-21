document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('button-pagar-productCart');
    
    if (boton) {
        boton.addEventListener('click', abrirImagen);
    }
    
});

function abrirImagen() {

Swal.fire({
    imageUrl: "/images/finalizarCompra.png",
    imageHeight: "auto",
    imageWidth: "50%",
    imageAlt: "Finalizar Compra",
    background: 'transparent',
    
    showConfirmButton: false,
    customClass: {
        popup: 'my-responsive-popup',
        content: 'my-responsive-content',
    }
  }
)
}