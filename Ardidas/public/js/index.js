// CARRUSEL DEL INDEX

document.addEventListener('DOMContentLoaded', function () {
    const carousel = document.getElementById('carouselExample'); //se captura el div que tiene todo el carrusel por dentro
    const carouselInstance = new bootstrap.Carousel(carousel, {
        interval: false // saca el bootstrap
    });

    function autoSlide() {
        setTimeout(function () {
            carouselInstance.next(); // le hago next sin hacerle click
            autoSlide(); // hace un bucle de llamados a la funcion para que se mueva solo
        }, 4500); // esperamos 4,5 segundos para desplazarce
    }

    autoSlide(); // ejecutamos la funcion
});


// utilizo la funcion de onclick que le pusimos a los botones de paginacion
function setClicked() {
    sessionStorage.setItem('paginationClicked', 'true');
}
// cuando la pagina recarga, hace el onload y despues cumple la funcion de scroll
window.onload = function () {
    //buscamos en el storage si se uso el evento click
    const paginationClicked = sessionStorage.getItem('paginationClicked');
    if (paginationClicked) {
        // capturamos la clase
        const productosTitle = document.getElementById('productos_home');
        productosTitle.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // y sacamos de la sesion el eventoclick hasta que pida utilizar de nuevo la funcion.
        sessionStorage.removeItem('paginationClicked');
    }
};