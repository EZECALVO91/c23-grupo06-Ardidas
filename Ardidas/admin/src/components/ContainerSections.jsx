import Section1 from "./Section1"
import Section2 from "./Section2"

export default function ContainerSections ({ apiData }) {
    return (
<div className="container_main_product">
        <Section1 productsCount={apiData && apiData.productsCount} 
        lastProductName={apiData && apiData.product.name} 
        lastProductImage={apiData && apiData.product.Image_products[0].filename} 
        lastProductDescription={apiData && apiData.product.description} 
        userCount ={apiData && apiData.usersCount} ></Section1>

        <Section2 categoriesCount={apiData && apiData.categoriesCount} categories={apiData && apiData.categories[0].category} ></Section2>
</div>

    )
}