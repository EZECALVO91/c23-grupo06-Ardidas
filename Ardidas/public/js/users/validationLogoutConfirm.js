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
            // Si el usuario confirma cerrar sesión, redirige a la página de cierre de sesión
            window.location.href = "/users/logout";
        }
    });
}