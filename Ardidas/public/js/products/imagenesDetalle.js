const imagenPrincipal = document.getElementById("imagenGrande")

const imagenChica2 = document.getElementById("imagenChica2")
const imagenChica3 = document.getElementById("imagenChica3")
const imagenChica4 = document.getElementById("imagenChica4")

const srcOriginal = imagenPrincipal.src
const srcOriginalImage2 = imagenChica2.src
const srcOriginalImage3 = imagenChica3.src
const srcOriginalImage4 = imagenChica4.src

imagenChica2.addEventListener("click", function() {
    imagenPrincipal.src = imagenChica2.src 
    imagenChica2.src = srcOriginal
})
// imagenChica2.addEventListener("mouseout", function() {
//     imagenPrincipal.src = srcOriginal;
// })


imagenChica3.addEventListener("click", function() {
    imagenPrincipal.src = imagenChica3.src 
    imagenChica3.src  = srcOriginalImage2
})
// imagenChica3.addEventListener("mouseout", function() {
//     imagenPrincipal.src = srcOriginal;
// })


imagenChica4.addEventListener("click", function() {
    imagenPrincipal.src = imagenChica4.src 
    imagenChica4.src  = srcOriginalImage3
})


// imagenPrincipal.addEventListener("mouseout", function() {
//     imagenPrincipal.src = srcOriginalImage4;
// })


