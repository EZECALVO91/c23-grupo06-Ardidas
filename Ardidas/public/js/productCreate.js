document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.getElementById('name');
    const priceInput = document.getElementsByName('price')[0];
    const descriptionInput = document.getElementById('description');
    const sizesInputs = document.getElementsByName('sizes');

    
    nameInput.addEventListener('blur', function() {
      validateName();
    });
  
    priceInput.addEventListener('blur', function() {
      validatePrice();
    });
  
    descriptionInput.addEventListener('blur', function() {
      validateDescription();
    });
  
    sizesInputs.forEach(function(sizeInput) {
      sizeInput.addEventListener('change', function() {
        validateSizes();
      });
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
      } else if (isNaN(priceValue)) {
        showError(priceInput, 'Ingrese un número válido');
      } else {
        hideError(priceInput);
      }
    }
  
    function showError(input, message) {
      const errorElement = input.parentElement.querySelector('.errores_validacion_login');
      errorElement.textContent = message;
      input.style.borderColor = 'red';
    }
  
    function hideError(input) {
      const errorElement = input.parentElement.querySelector('.errores_validacion_login');
      errorElement.textContent = '';
      input.style.borderColor = '';
    }
  });
  