const imagenPrincipal = document.getElementById("imagenGrande")

const imagenChica2 = document.getElementById("imagenChica2")
const imagenChica3 = document.getElementById("imagenChica3")
const imagenChica4 = document.getElementById("imagenChica4")

const srcOriginal = imagenPrincipal.src

imagenChica2.addEventListener("mouseover", function() {
    imagenPrincipal.src = imagenChica2.src 
})
imagenChica2.addEventListener("mouseout", function() {
    imagenPrincipal.src = srcOriginal;
})


imagenChica3.addEventListener("mouseover", function() {
    imagenPrincipal.src = imagenChica3.src 
})
imagenChica3.addEventListener("mouseout", function() {
    imagenPrincipal.src = srcOriginal;
})


imagenChica4.addEventListener("mouseover", function() {
    imagenPrincipal.src = imagenChica4.src 
})
imagenChica4.addEventListener("mouseout", function() {
    imagenPrincipal.src = srcOriginal;
})
