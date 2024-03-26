function confirmDelete(productId) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "¿Seguro queres eliminar este producto?",
        text: "¡No se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "¡Sí, eliminalo!",
        cancelButtonText: "¡No, fue un error!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma la eliminación, envía el formulario de eliminación
            var form = document.createElement('form');
            form.method = 'POST';
            form.action = '/products/delete/' + productId + '?_method=DELETE';
            document.body.appendChild(form);
            form.submit();
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            // Si el usuario cancela, no hagas nada
            return false;
        }
    });
}