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
    await queryInterface.bulkInsert('Talles', [
      {
      tamaño:"36"
    },
    {
      tamaño:"37"
    },
    {
      tamaño:"38"
    },
    {
      tamaño:"39"
    },
    {
      tamaño:"40"
    },
    {
      tamaño:"41"
    },
    {
      tamaño:"42"
    },
    {
      tamaño:"43"
    },
    {
      tamaño:"44"
    },
    {
      tamaño:"45"
    },
  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Talles', null, {});
     */
    await queryInterface.bulkDelete('Talles', null, {});
  }
};
