import React from "react";

const GeneralInfo = ({ data }) => {
  return (
    <div className="general-info">
      <h2>Contabilizacion de:</h2>
      <div className="div_articulos_dash info2">
        <div className="box_container_count users1">
          <h3>Usuarios</h3>
          <p><i className="fa-solid fa-users"></i> {data.usersCount}</p>
        </div>
        <div className="box_container_count products1">
          <h3>Productos</h3>
          <p><i className="fa-solid fa-boxes-stacked"></i> {data.productsCount}</p>
        </div>
      </div>
      <div><h3>Ultimo producto Agregado</h3></div>
    </div>
  );
};

export default GeneralInfo;
