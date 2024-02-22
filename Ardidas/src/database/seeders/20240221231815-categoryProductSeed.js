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
    await queryInterface.bulkInsert('Category_products', [
      {
        categoria:"Oferta"
      },
      {
        categoria:"Destacado"
      },
      {
        categoria:"Lanzamiento"
      },
      {
        categoria:"Temporada"
      }
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Category_products', null, {});
     */
    await queryInterface.bulkDelete('Category_products', null, {});
  }
};
