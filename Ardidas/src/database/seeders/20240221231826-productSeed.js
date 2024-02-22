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
        price:100000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:1,
        id_size:6,
        id_color:6,

      },
      {
        id:2,
        name:"Nike Shot2",
        price:120000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:1,
        id_size:1,
        id_color:1,
      },
      {
        id:3,
        name:"Nike Shot3",
        price:130000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:2,
        id_size:4,
        id_color:4,
      },
      {
        id:4,
        name:"Nike Shot4",
        price:140000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:3,
        id_size:3,
        id_color:3,
      },
      {
        id:5,
        name:"Nike Shot5",
        price:150000,
        description:"LAS MEJORES ZAPATILLAS",
        id_category_product:4,
        id_size:2,
        id_color:2,
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
