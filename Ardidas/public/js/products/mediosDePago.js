document.addEventListener('DOMContentLoaded', function () {
    const botonPagar = document.getElementById('button-pagar-productCart');
    
    if (botonPagar) {
        botonPagar.addEventListener('click', abrirImagenPago);
    }
    
});

function abrirImagenPago() {

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