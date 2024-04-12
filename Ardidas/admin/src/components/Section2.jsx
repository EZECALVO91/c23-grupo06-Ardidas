export default function Section2 ({categoriesCount, categories}) {
    return (
        <section className="section_info2">

        <h2>Cantidad de:</h2>
        <div className="div_articulos_dash categories_div">
            <div className="box_container_categories">
                <h3>Categorias</h3>
                <p><i className="fa-solid fa-table-list"></i> {categoriesCount} </p>
            </div>
        </div>

                    <h2>Articulos</h2>
        <div className="div_articulos_dash dash1">
            <div className="dash_description">
                <ul>
                    
                        <li className="acordion_li">
                            <button className="acordion"> {categories} </button>
                            <ul className="acordion_ul">
                                
                                    <li>
                                        <a href="/products/detalle/<%= product.id %>"> asdasdasdasdasdas{categories} </a>
                                       
                                    </li>
                              
                            </ul>
                        </li>
                        <li className="acordion_li">
                            <button className="acordion"> {categories} </button>
                            <ul className="acordion_ul">
                                
                                    <li>
                                        <a href="/products/detalle/<%= product.id %>">asdasd {categories} </a>
                                       
                                    </li>
                                    <li>
                                        <a href="/products/detalle/<%= product.id %>">asdasd {categories} </a>
                                       
                                    </li>
                                    <li>
                                        <a href="/products/detalle/<%= product.id %>">asdasd {categories} </a>
                                       
                                    </li>
                                    <li>
                                        <a href="/products/detalle/<%= product.id %>">asdasd {categories} </a>
                                       
                                    </li>
                              
                            </ul>
                        </li>
                        <li className="acordion_li">
                            <button className="acordion"> {categories} </button>
                            <ul className="acordion_ul">
                                
                                    <li>
                                        <a href="/products/detalle/<%= product.id %>"> {categories} </a>
                                       
                                    </li>
                              
                            </ul>
                        </li>
                        <li className="acordion_li">
                            <button className="acordion"> {categories} </button>
                            <ul className="acordion_ul">
                                
                                    <li>
                                        <a href="/products/detalle/<%= product.id %>"> {categories} </a>
                                       
                                    </li>
                              
                            </ul>
                        </li>
                 
                </ul>
            </div>
            
        </div>
        <script src="../../../public/js/dashboardReact/dashboard.js"></script>
    </section>
    
    )
}