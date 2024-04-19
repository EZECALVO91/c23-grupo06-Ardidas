function confirmDelete(userId) {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger"
        },
        buttonsStyling: false
    });

    swalWithBootstrapButtons.fire({
        title: "¿Seguro querés eliminar al usuario?",
        text: "¡No se puede revertir!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "¡Sí, eliminalo!",
        cancelButtonText: "¡No, fue un error!",
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            swalWithBootstrapButtons.fire({
                title: "Usuario eliminado con Exito!",
                icon: "success"
            }).then(() => {
                let form = document.createElement('form');
                form.method = 'POST';
                form.action = '/users/delete/' + userId + '?_method=DELETE';
                document.body.appendChild(form);
                form.submit();
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
            swalWithBootstrapButtons.fire({
                title: "Tu usuario no fue Eliminado",
                icon: "error"
            });
        }
    });
}
