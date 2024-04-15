'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     await queryInterface.bulkInsert('People', [{
     name: 'John Doe',
     isBetaMember: false
    }], {});
    */
    await queryInterface.bulkInsert('Categories', [
      {
      category:'ADMIN',
      createdAt:  new Date,
      updatedAt: new Date 
      },
      {
      category:'USER',
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
     * await queryInterface.bulkDelete('Categories', null, {});
     */
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
