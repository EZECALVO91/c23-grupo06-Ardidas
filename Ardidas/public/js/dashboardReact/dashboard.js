const acordion = document.getElementsByClassName("acordion");

// Iteramos sobre todos los botones y les agregamos un listener de eventos
for (let i = 0; i < acordion.length; i++) {
    acordion[i].addEventListener("click", function() {
        const isActive = this.classList.contains("active");// chequear si el boton tiene la clase active.
        // se itera por lo botones y se le saca la clase active.
        for (let e = 0; e < acordion.length; e++) {
            acordion[e].classList.remove("active");// se ocultan todos los botones
            const panel = acordion[e].nextElementSibling;
            panel.style.display = "none";
        }

        if (!isActive) {//si tiene clase active le agregamos el backgraund
            this.classList.add("active");
            const panel = this.nextElementSibling;
            panel.style.display = "block";
        }
    });
}