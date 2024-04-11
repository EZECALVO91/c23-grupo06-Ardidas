import React from "react";
import Categoria from "./Categoria";

const Articulos = ({ categories }) => {
  return (
    <div className="div_articulos_dash dash1">
      <div className="dash_description">
        <ul>
          {categories.map((category) => (
            <Categoria key={category.id} category={category} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Articulos;
