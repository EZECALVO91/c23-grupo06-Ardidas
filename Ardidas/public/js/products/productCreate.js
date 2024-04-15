document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementsByName('price')[0];
    const sizesInputs = document.getElementsByName('sizes');
    const imageInput = document.querySelector("#image");
    const descriptionTextarea = document.getElementById('description');
    const createProductForm = document.getElementById('createProductForm');

    let validationErrors = false;
    
    nameInput.addEventListener('blur', function() {
      validateName();
    });
  
    priceInput.addEventListener('blur', function() {
      validatePrice();
    });
  
    sizesInputs.forEach(function(sizeInput) {
      sizeInput.addEventListener('change', function() {
        validateSizes();
      });
    });

    imageInput.addEventListener("change", function() {
      validateImage()
    })

  descriptionTextarea.addEventListener('blur', validateDescription);

  createProductForm.addEventListener('submit', function(event) {
    if (validationErrors) {
        event.preventDefault(); // Evitar el envío del formulario si hay errores de validación
    }
});

    window.addEventListener('load', function() {
      validateSizes();
  });
  
    function validateName() {
      const nameValue = nameInput.value.trim();
      if (nameValue === '') {
        showError(nameInput, 'El nombre es obligatorio');
        validationErrors = true;
      } else if (nameValue.length < 5) {
        showError(nameInput, 'Tiene que tener un mínimo de 5 caracteres');
        validationErrors = true;
      }
      else {
        hideError(nameInput);
        validationErrors = false;
      }
      toggleCreateButton()
    }
  
    function validatePrice() {
      const priceValue = priceInput.value.trim();
      if (priceValue === '') {
        showError(priceInput, 'El precio no puede quedar vacío');
        validationErrors = true;
      } else if (priceValue <= 0) {
        showError(priceInput, 'El precio debe ser mayor a 0');
        validationErrors = true;
      } else if (isNaN(priceValue)) {
        showError(priceInput, 'Ingrese un número válido');
        validationErrors = true;
      } else {
        hideError(priceInput);
        validationErrors = false;
      }
      toggleCreateButton()
    }


    function validateSizes() {
      const selectedSizes = Array.from(sizesInputs).some(input => input.checked);
      const sizesErrorElement = document.getElementById('sizesError');
      
      if (!selectedSizes) {
          sizesErrorElement.textContent = 'Por favor, seleccione al menos un talle.';
          validationErrors = true;
        } else {
          sizesErrorElement.textContent = '';
          validationErrors = false;
      }
      toggleCreateButton()
  }

  function validateImage() {
    const filtro = /\.(jpg|jpeg|png|gif|webp|svg)$/;

    const file = imageInput.files[0];

    if (!file) {
        // Si no se selecciona ningún archivo, no hay error
        hideError(imageInput);
        return;
    }

    // Verificar el tipo MIME del archivo
    const fileType = file.type;
    if (!fileType.startsWith('image/')) {
        showError(imageInput, 'El archivo seleccionado no es una imagen');
        return;
    }

    // Verificar la extensión del archivo
    if (!filtro.test(file.name.toLowerCase())) {
        showError(imageInput, 'Solo se permiten formatos de imagen (jpg, jpeg, png, gif, webp, svg)');
    } else {
        hideError(imageInput);
    }
}

function validateDescription() {
  const descriptionValue = descriptionTextarea.value.trim();
  if (descriptionValue.length > 0 && descriptionValue.length < 20) {
      showError(descriptionTextarea, 'Si vas a agregar una descripción esta debe tener al menos 20 caracteres');
      validationErrors = true;
    } else {
      hideError(descriptionTextarea);
      validationErrors = false;
  }
  toggleCreateButton()
}
 
  
function showError(input, message) {
  const errorElement = input.nextElementSibling;
  if (errorElement) {
      errorElement.textContent = message;
      input.style.borderColor = 'red';
  }
}
  
    function hideError(input) {
      const errorElement = input.nextElementSibling;
      errorElement.textContent = '';
      input.style.borderColor = '';
    }

    function toggleCreateButton() {
      const createButton = document.getElementById('createProductButton');
      createButton.disabled = validationErrors ||
          !nameInput.validity.valid ||
          !priceInput.validity.valid ||
          !areSizesValid() ||
          !descriptionTextarea.validity.valid;
  }
  
  function areSizesValid() {
      return Array.from(sizesInputs).some(input => input.checked);
  }

  });
