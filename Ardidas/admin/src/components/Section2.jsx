import PropTypes from "prop-types"
import{ useState, useEffect } from 'react';

export default function Section2 ({categoriesCount}) {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            const response = await fetch("http://localhost:3000/api/dashboardReact")
            const consulta = await response.json()
            setCategories(consulta.categories)
            console.log(consulta.categories[0].Products[0].name)
        }
        getCategories()
    },[]);

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
                {categories.length > 0 &&
                    categories.map((categoria) => (
                    <li key={categoria.id} className="acordion_li">
                        <button className="acordion">{categoria.category}</button>
                        <ul className="acordion_ul">
                            {categoria.Products.map((product) => (
                            <li key={product.id}>
                                <a href={`http://localhost:3000/products/detalle/${product.id}`}>{product.name}</a>
                            </li>
                            ))}
                        </ul>  
                    </li>
                    ))
                }
            </ul>

            </div>
            
        </div>
        <script src="../../../public/js/dashboardReact/dashboard.js"></script>
    </section>
    
    )
}

Section2.propTypes = {
    categoriesCount: PropTypes.number,
};