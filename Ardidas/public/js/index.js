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