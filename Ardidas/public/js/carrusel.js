document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const carrusel = document.querySelector('.carrusel');
    const carruselItems = document.querySelectorAll('.carrusel-item');
    const totalItems = carruselItems.length;
    const carruselWidth = carrusel.clientWidth;
    const itemWidth = carruselWidth / 3;
  
    function moveSlide(direction) {
      currentIndex += direction; // Incrementar o decrementar el índice
      if (currentIndex < 0) {
        currentIndex = totalItems - 1; // Si el índice es menor que 0, retroceder al último elemento
      } else if (currentIndex >= totalItems) {
        currentIndex = 0; // Si el índice es igual o mayor que el total de elementos, volver al primer elemento
      }
      const displacement = currentIndex * itemWidth; // Calcular el desplazamiento basado en el nuevo índice
      carrusel.style.transform = `translateX(-${displacement}px)`; // Aplicar el desplazamiento al carrusel
    }
  
    document.querySelector('.atras').addEventListener('click', function() {
      moveSlide(-1);
    });
  
    document.querySelector('.adelante').addEventListener('click', function() {
      moveSlide(1);
    });
  });
  