import PropTypes from "prop-types"
import{ useState, useEffect } from 'react';

export default function Section2 ({categoriesCount}) {
    const [categories, setCategories] = useState([])
    useEffect(() => {
        const getCategories = async () => {
            try{
                const response = await fetch("http://localhost:3000/api/dashboardReact")
            const consulta = await response.json()
             
            const categoriesWithState  = consulta.categories.map(category => ({//se crea la variable para guardar lo que mapeamos y agregamos a cada categoria.
                ...category, isActive:false// se itera sobre categories y agregamos el estado isActive : false (osea nada) a cada categoría
            }))
            setCategories(categoriesWithState ); //seteamos la variable dentro de setcategories para luego utilizarla.
            } catch (error){
                console.log("no se pudieron obtener las categoias", error)
            }
        }
        getCategories()
    },[]);

    //HICE MUCHOS COMENTARIOS PORQUE FUE PRUEBA Y ERROR Y PARA NO IRME OLVIDADO CADA PASO QUE HACIA ESTA FUNCION PORQUE ES LA PRIMERA VES QUE TRATO
    //DE TRABAJAR UN EVENTO DIRECTAMENTE EN REACT.

    const handleAccordion = (index) => { // la palabra handle fue recomendada por el profe juan dijo que :es para declarar una accion o evento 
        setCategories(prevCategories => { //usamos setcategories para traer todas las categorias con el isActive por defecto y le agregamos un parametro para trabajar por dentro
            return prevCategories.map((categoria, i) => {
                if (i === index) {
                    // Invertimos el estado isActive de la categoría clickeada
                    return { ...categoria, isActive: !categoria.isActive };
                    //empezamos usando spread operator, para traer todo lo que contiene categoria
                    //actualizamos la propiedad y al negar la propiedad cambiamos el valor de true a false o al reves.
                } else {
                    return { ...categoria, isActive: false }; 
                    //Y en el else al boton que esta clickeado se le pone el valor true
                    //entonces lo que pasa es que todos los otros botones tienen la propiedad false
                    //entonces se cierran todas las categorias que no sean true.
                }
            });
        });
    };

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
                    categories.map((categoria, index) => (
                    <li key={categoria.id} className="acordion_li">
                        <button 
                            className={`acordion ${categoria.isActive ? 'active' : ''}`} //ternario para que si se activa una de las categorias que poseen isActive le agregue la clase active
                            onClick={() => handleAccordion(index)}>{categoria.category}
                        </button>
                        {/* Mostramos la lista solo si isActive es verdadero : true */}
                        {categoria.isActive && (
                        <ul className="acordion_ul">
                            {categoria.Products.map((product) => (
                            <li key={product.id}>
                                <a href={`http://localhost:3000/products/detalle/${product.id}`}>{product.name}</a>
                            </li>
                            ))}
                        </ul>  
                        )}
                    </li>
                    ))
                }
            </ul>
            </div>
        </div>
    </section>
    
    )
}

Section2.propTypes = {
    categoriesCount: PropTypes.number,
};