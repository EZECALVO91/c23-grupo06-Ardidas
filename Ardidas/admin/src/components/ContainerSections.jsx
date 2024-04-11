import Section1 from "./Section1"
import Section2 from "./Section2"

export default function ContainerSections ({ apiData }) {
    return (
<div className="container_main_product">
        <Section1 productsCount={apiData && apiData.meta.count} ></Section1>
        <Section2 categoriesCount={apiData && apiData.meta.categories} categories={apiData && apiData.meta.countByCategory.Destacado} ></Section2>
</div>

    )
}