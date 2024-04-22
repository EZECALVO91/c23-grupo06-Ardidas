export default function Footer () {
    return (
<footer className="footer">
    <div className="contenedor-footer">
        <div className="hipervinculos link-footer">
            <h3 className="txt-footer-navegacion">NAVEGACIÓN</h3>
            <ul>
                <li><a href="http://localhost:3000/">Inicio</a></li>
                <li><a href="http://localhost:3000/contacto">Contacto</a></li>
                <li><a href="http://localhost:3000/products">Productos</a></li>
                <li><a href="http://localhost:3000/ayuda">¿Cómo comprar?</a></li>
            </ul>
        </div>

        <div className="hipervinculos contacto_footer">
            <h3>CONTACTANOS</h3>
            <ul>
                <li>
                    <a href="tel:123-456-7890">
                        <i className="fa-solid fa-phone icono-contact"></i>cel: 1131036827</a>
                </li>
                <li>
                    <a href="mailto:ardidas.contacto@gmail.com"><i
                            className="fa-solid fa-envelope icono-contact"></i>ardidas.contacto@gmail.com</a>
                </li>
            </ul>
        </div>

        <div className="hipervinculos redes-footer">
            <h3>REDES SOCIALES</h3>
            <ul className="redes">
                <li>
                    <a href="https://www.facebook.com/adidasAR" target="_blank"><i className="fa-brands fa-square-facebook"
                            ></i></a>
                </li>
                <li>
                    <a href="https://www.tiktok.com/@adidas?lang=es" target="_blank"><i className="fa-brands fa-tiktok"
                            ></i>
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/adidasar/?hl=es-la" target="_blank"><i className="fa-brands fa-instagram"
                            ></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <div className="copy-footer">
        <h6 className="copy">Copyright © 1999-2024 Ardidas S.R.L.</h6>
    </div>
</footer>
    )
}