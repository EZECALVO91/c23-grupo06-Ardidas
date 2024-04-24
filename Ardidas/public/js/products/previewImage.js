function previewImage(event, previewId) {
    const preview = document.getElementById(previewId);
    preview.style.display = 'block';
    preview.src = URL.createObjectURL(event.target.files[0]);
  }

  document.getElementById('image').addEventListener('change', function(event) {
    previewImage(event, 'previewImage');
  });

  document.getElementById('image2').addEventListener('change', function(event) {
    previewImage(event, 'previewImage2');
  });

  document.getElementById('image3').addEventListener('change', function(event) {
    previewImage(event, 'previewImage3');
  });

  document.getElementById('image4').addEventListener('change', function(event) {
    previewImage(event, 'previewImage4');
  });

const img1 = document.getElementById("delete_img1")
const img1ABorrar = document.getElementById("previewImage")

img1.addEventListener("click", function(){
  console.log("quisiste borrar la foto, chinwenwencha");
  img1ABorrar.style.display = "none"
})

const img2 = document.getElementById("delete_img2")
const img2ABorrar = document.getElementById("previewImage2")

img2.addEventListener("click", function(){
  console.log("quisiste borrar la foto N2, chinwenwencha");
  img2ABorrar.style.display = "none"
})

const img3 = document.getElementById("delete_img3")
const img3ABorrar = document.getElementById("previewImage3")

img3.addEventListener("click", function(){
  console.log("quisiste borrar la foto N3, chinwenwencha");
  img3ABorrar.style.display = "none"
})

const img4 = document.getElementById("delete_img4")
const img4ABorrar = document.getElementById("previewImage4")

img4.addEventListener("click", function(){
  console.log("quisiste borrar la foto N4, chinwenwencha");
  img4ABorrar.style.display = "none"
})
