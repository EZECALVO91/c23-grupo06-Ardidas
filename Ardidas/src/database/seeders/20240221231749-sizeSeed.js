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
    await queryInterface.bulkInsert('Sizes', [
      {
      size:"36",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"37",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"38",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"39",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"40",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"41",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"42",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"43",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"44",
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      size:"45",
      createdAt:  new Date,
      updatedAt: new Date
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
    await queryInterface.bulkDelete('Sizes', null, {});
  }
};
