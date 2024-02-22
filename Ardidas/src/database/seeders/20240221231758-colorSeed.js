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
    await queryInterface.bulkInsert('Colors', [
        {
          color:"Blanco"
        },
        {
          color:"Negro"
        },
        {
          color:"Azul"
        },
        {
          color:"Rosado"
        },
        {
          color:"Gris"
        },
        {
          color:"Beige"
        },
        {
          color:"Rojo"
        },
        {
          color:"Verde"
        },
        {
          color:"Violeta"
        },
        {
          color:"Amarillo"
        }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Colors', null, {});
  }
};
