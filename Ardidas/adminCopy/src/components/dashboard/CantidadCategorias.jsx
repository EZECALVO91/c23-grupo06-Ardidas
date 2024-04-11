import React from "react";

const CantidadCategorias = ({ categories }) => {
  return (
    <div className="div_articulos_dash categories_div">
      <div className="box_container_categories">
        <h3>Categorias</h3>
        <p><i className="fa-solid fa-table-list"></i> {categories.length}</p>
      </div>
    </div>
  );
};

export default CantidadCategorias;
