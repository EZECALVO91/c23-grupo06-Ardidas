'use strict';

// const {getJson } = require("../../utility/jsonMethod");
// const product = getJson("product")


// const data = product.map(products => {
//     products.id,
//     products.nombre,
//     products.talles,
//     products.color,
//     products.precio,
//     products.descripcion,
//     products.imagen,
//     products.category

//   return products
// })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  //PRODUCTOS CREADOS CON EL MISMO JSON QUE VENIAMOS UTILIZANDO

  // await queryInterface.bulkInsert('Products',data ,{});
    
  //PRODUCTOS CREADOS A MANO

    await queryInterface.bulkInsert('Products', [
      {
        id:1,
        name:"Nike Shot1",
        color:"Negro",
        price:100000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:1,
        createdAt:  new Date,
        updatedAt: new Date

      },
      {
        id:2,
        name:"Nike Shot2",
        color:"Gris",
        price:120000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:1,
        createdAt:  new Date,
        updatedAt: new Date

      },
      {
        id:3,
        name:"Nike Shot3",
        color:"Blanco",
        price:130000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:2,
        createdAt:  new Date,
        updatedAt: new Date

      },
      {
        id:4,
        name:"Nike Shot4",
        color:"Rojo",
        price:140000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        id:5,
        name:"Nike Shot5",
        color:"Azul",
        price:150000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:4,
        createdAt:  new Date,
        updatedAt: new Date
    }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Products', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
