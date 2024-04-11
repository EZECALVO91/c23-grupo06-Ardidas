export default function Header () {
    return (
        <header className="header">

        <div className="headerSinFondo">
            <a className="" href="http://localhost:3000/"><img className="logo" src="/LOGO-ARDIDAS.png"
                    alt="LOGO-ARDIDAS" /></a>
            <nav className="">
                <ul className="nav_react">
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