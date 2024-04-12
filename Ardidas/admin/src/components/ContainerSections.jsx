import Section1 from "./Section1"
import Section2 from "./Section2"
import PropTypes from "prop-types"

export default function ContainerSections ({ apiData }) {
    return (
<div className="container_main_product">
        <Section1 productsCount={apiData && apiData.productsCount} 
        lastProductName={apiData && apiData.product.name} 
        lastProductImage={apiData && apiData.product.Image_products[0].filename} 
        lastProductDescription={apiData && apiData.product.description} 
        productId={apiData && apiData.product.id}
        userCount ={apiData && apiData.usersCount} ></Section1>

        <Section2 categoriesCount={apiData && apiData.categoriesCount} categories={apiData && apiData.categories[0].category} ></Section2>
</div>

    )
}




//por el formato que tiene la respuesta de la api tenemos que implementar shape,
//para indicar que va a traer varias propiedades, y de cada propiedad pasamos a definir el tipo de dato normalmente
//Y en otros casos, dentro de alguna propiedad lo que recibimos es un array, por ende al momento de querer declarar
//su tipo de dato tenemos que pasar arrayOf y despues shape para definir la estructura y la o las propiedades a recibir
ContainerSections.propTypes = {
    apiData: PropTypes.shape({
        productsCount: PropTypes.number,
        product: PropTypes.shape({
            name: PropTypes.string,
            Image_products: PropTypes.arrayOf(
                PropTypes.shape({
                    filename: PropTypes.string
                })
            ),
            description: PropTypes.string,
            id: PropTypes.number
        }),
        usersCount: PropTypes.number,
        categoriesCount: PropTypes.number,
        categories: PropTypes.arrayOf(
            PropTypes.shape({
                category: PropTypes.string
            })
        )
    })
};