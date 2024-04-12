

export default function Header () {
    return (
        <header className="header header_react">

        <div className="headerSinFondo">
            <div className="logo_container">
                <a className="" href="http://localhost:3000/"><img className="logo" src="/LOGO-ARDIDAS.png"
                                    alt="LOGO-ARDIDAS" /></a>

            </div>
            
            <nav className="">
                <ul className="nav_react">
                    <li>
                        <a className="" href="http://localhost:3000/"><i class="fa-solid fa-house"></i></a>
                    </li>
                    <li>
                        <a className="" href="http://localhost:3000/products"><i className="fa-solid fa-boxes-stacked "></i></a>
                    </li>
                </ul>
            </nav>

        </div>
        </header>
    )
}