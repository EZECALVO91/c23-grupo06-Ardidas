export default function Header () {
    return (
        <header className="header">

        <div className="contenedor_search_nav_home">
            <a className="" href="http://localhost:3000/"><img className="logo" src="/LOGO-ARDIDAS.png"
                    alt="LOGO-ARDIDAS" /></a>
            <nav className="nav_home_index">
                <ul className="nav_ul">
                    <li>
                        <a className="" href="http://localhost:3000/"><strong>INICIO</strong></a>
                    </li>
                    <li><a className="" href="http://localhost:3000/products">PRODUCTOS</a></li>
                </ul>
            </nav>

        </div>
        </header>
    )
}