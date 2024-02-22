'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Products', [
      {
        id:1,
        nombre:"Nike Shot1",
        precio:100000,
        descripcion:"LAS MEJORES ZAPATILLAS",
        id_category_product:1,
        id_talles:6,
        color_id:6,

      },
      {
        id:2,
        nombre:"Nike Shot2",
        precio:120000,
        descripcion:"LAS MEJORES ZAPATILLAS",
        id_category_product:1,
        id_talles:1,
        color_id:1,
      },
      {
        id:3,
        nombre:"Nike Shot3",
        precio:130000,
        descripcion:"LAS MEJORES ZAPATILLAS",
        id_category_product:2,
        id_talles:4,
        color_id:4,
  
      },
      {
        id:4,
        nombre:"Nike Shot4",
        precio:140000,
        descripcion:"LAS MEJORES ZAPATILLAS",
        id_category_product:3,
        id_talles:3,
        color_id:3,
      },
      {
        id:5,
        nombre:"Nike Shot5",
        precio:150000,
        descripcion:"LAS MEJORES ZAPATILLAS",
        id_category_product:4,
        id_talles:2,
        color_id:2,
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
