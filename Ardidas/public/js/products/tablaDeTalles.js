document.addEventListener('DOMContentLoaded', function () {
    const boton = document.getElementById('tablaDeTalles');
    
    if (boton) {
        boton.addEventListener('click', abrirImagen);
    }
    
});

function abrirImagen() {

Swal.fire({
    imageUrl: "/images/tablaDeTalles.png",
    imageHeight: "auto",
    imageWidth: "70%",
    imageAlt: "tablaDeTalles",
    background: 'transparent',
    
    showConfirmButton: false,
    customClass: {
        popup: 'my-responsive-popup',
        content: 'my-responsive-content',
    }
  }
)
}