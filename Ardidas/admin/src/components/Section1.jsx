export default function Section1 ({productsCount}) {
    return (
<section className="section_info1">

<div><h2>Contabilizacion de:</h2></div>
<div className="div_articulos_dash info2">
    <div className="box_container_count users1">
        <h3>Usuarios</h3>
        <p><i className="fa-solid fa-users"></i> 7 </p>
</div>  
<div className="box_container_count products1">
        <h3>Productos</h3>
        <p><i className="fa-solid fa-boxes-stacked"></i>{productsCount}</p>
</div>

</div>

<div><h3>Ultimo producto Agregado</h3></div>
<div className="div_articulos_dash info1">
    
        <div className="img_dashReact">
            <a href="/products/detalle/<%= product.id %>">     
                <img src="../../public/LOGO-ARDIDAS.png" alt="Imagen del producto"/>
            </a>
        </div>
        <div className="dash_description">
            <a href="/products/detalle/1"><h3> product.name </h3></a>
            <p> product.description </p>
        </div>
    

</div>

</section>

    )
}