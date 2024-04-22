import PropTypes from "prop-types"

export default function Section1 ({productsCount,userCount,lastProductName,lastProductDescription,lastProductImage, productId}) {
    return (
<section className="section_info1">

<div><h2>Contabilización de:</h2></div>
<div className="div_articulos_dash info2">
    <div className="box_container_count users1">
        <h3>Usuarios</h3>
        <p><i className="fa-solid fa-users"></i> {userCount} </p>
</div>  
<div className="box_container_count products1">
        <h3>Productos</h3>
        <p><i className="fa-solid fa-boxes-stacked "></i> {productsCount}</p>
</div>

</div>

<div><h3>Último producto agregado:</h3></div>
<div className="div_articulos_dash info1">
    
        <div className="img_dashReact">
        <a href={`http://localhost:3000/products/detalle/${productId}`}>   
                <img src = {`http://localhost:3000/images/products/${lastProductImage}`} alt="Imagen del producto"/>
            </a>
        </div>
        <div className="dash_description">
            <a href=""><h3> {lastProductName} </h3></a>
            <p> {lastProductDescription} </p>
        </div>
    

</div>

</section>

    )
}

Section1.propTypes = {
    productsCount: PropTypes.number,
    userCount: PropTypes.number,
    lastProductName: PropTypes.string,
    lastProductDescription: PropTypes.string,
    lastProductImage: PropTypes.string,
    productId: PropTypes.number
};