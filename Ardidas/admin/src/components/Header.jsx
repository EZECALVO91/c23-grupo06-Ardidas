export default function Header () {
    return (
        <header className="header">
            <div className="login_header_index headerSinFondo">
                <a href="http://localhost:5173/"> Dashboard |</a>
                <img className="avatar_header" src="/images/users/default-avatar-profile.jpg"
                        alt="imagen_avatar_usuario"/>
                    <a href="http://localhost:3000/users/profile/1">
                        <p>
                            eze@admin.com
                        </p>
                    </a>
                    <a href="">
                        <p> | </p>
                    </a>
                    <a href="#" id="logoutBtn"><p>Cerrar Sesión</p></a>
            </div>
          <div className="contenedor_search_nav_home">
            <a className="logo-contenedor" href="http://localhost:3000/"><img className="logo" src="/LOGO-ARDIDAS.png"
                    alt="LOGO-ARDIDAS" /></a>
            <nav className="nav_home_index">
                <ul className="nav_ul">
                    <li>
                        <a className="nav_header_sections" href="http://localhost:3000/"><strong>INICIO</strong></a>
                    </li>
                    <li><a className="nav_header_sections" href="http://localhost:3000/contacto">CONTACTO</a></li>
                    <li><a className="nav_header_sections" href="http://localhost:3000/products">PRODUCTOS</a></li>
                    <li><a className="nav_header_sections" href="http://localhost:3000/ayuda">¿COMO COMPRAR?</a></li>
                </ul>
            </nav>
            <form className="busqueda-contenedor" action="http://localhost:3000/search" method="GET">
                <input className="busqueda home-logo-busqueda" type="text" name="keywords" placeholder="Buscar" />
                <i className="fa-solid fa-magnifying-glass" ></i>
                <a className="carrito_header_index" href="/products/carrito"><i className="fa-solid fa-bag-shopping"
                        ></i></a>
            </form>
        </div>
        </header>
    )
}