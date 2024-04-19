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