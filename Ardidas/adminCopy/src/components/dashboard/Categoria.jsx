import React from "react";

const Categoria = ({ category }) => {
  return (
    <li className="acordion_li">
      <button className="acordion">{category.category}</button>
      <ul className="acordion_ul">
        {category.Products.map((product) => (
          <li key={product.id}>
            <a href={`/products/detalle/${product.id}`}>{product.name}</a>
            {/* Agrega más detalles del producto según sea necesario */}
          </li>
        ))}
      </ul>
    </li>
  );
};

export default Categoria;

