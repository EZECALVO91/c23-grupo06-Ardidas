document.addEventListener('DOMContentLoaded', function () {
    const logoutBtn = document.getElementById('logoutBtn');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', confirmLogout);
    }
});

function confirmLogout() {
    Swal.fire({
        title: "¿Seguro queres cerrar sesión?",
        showDenyButton: true,
        confirmButtonText: "Sí",
        denyButtonText: "No"
    }).then((result) => {
        if (result.isConfirmed) {
            // Si el usuario confirma cerrar sesion, redirige a la pagina de cierre de sesion
            window.location.href = "/users/logout";
        }
    });
}