import React from "react";

const UltimoProducto = ({ product }) => {
  return (
    <div className="div_articulos_dash info1">
      {product ? (
        <div className="img_dashReact">
          <a href={`/products/detalle/${product.id}`}>
            <img src={`/images/products/${product.Image_products[0] ? product.Image_products[0].filename : ''}`} alt="Imagen del producto" />
          </a>
        </div>
      ) : (
        <p>No hay productos disponibles.</p>
      )}
    </div>
  );
};

export default UltimoProducto;
