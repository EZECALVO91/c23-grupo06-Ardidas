document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementsByName('price')[0];
    const sizesInputs = document.getElementsByName('sizes');

    
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

    window.addEventListener('load', function() {
      validateSizes();
  });
  
    function validateName() {
      const nameValue = nameInput.value.trim();
      if (nameValue === '') {
        showError(nameInput, 'El nombre es obligatorio');
      } else if (nameValue.length < 5) {
        showError(nameInput, 'Tiene que tener un mínimo de 5 caracteres');
      }
      else {
        hideError(nameInput);
      }
    }
  
    function validatePrice() {
      const priceValue = priceInput.value.trim();
      if (priceValue === '') {
        showError(priceInput, 'El precio no puede quedar vacío');
      } else if (priceValue < 0) {
        showError(priceInput, 'El precio debe ser mayor a 0');
      } else if (isNaN(priceValue)) {
        showError(priceInput, 'Ingrese un número válido');
      } else {
        hideError(priceInput);
      }
    }


    function validateSizes() {
      const selectedSizes = Array.from(sizesInputs).some(input => input.checked);
      const sizesErrorElement = document.getElementById('sizesError');
      
      if (!selectedSizes) {
          sizesErrorElement.textContent = 'Por favor, seleccione al menos un talle.';
      } else {
          sizesErrorElement.textContent = '';
      }
  }
  
    function showError(input, message) {
      const errorElement = input.nextElementSibling;
      errorElement.textContent = message;
      input.style.borderColor = 'red';
    }
  
    function hideError(input) {
      const errorElement = input.nextElementSibling;
      errorElement.textContent = '';
      input.style.borderColor = '';
    }

  });

 
  