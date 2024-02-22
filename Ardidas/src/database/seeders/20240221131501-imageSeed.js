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
    await queryInterface.bulkInsert('Images', [
    {
      name: "Huchiha",
      path:"sadfsfsdf"
    },
    {
      name: "Kakuso",
      path:"sdfsfsdf"
    },
    {
      name: "Monkey D. Luffy",
      path:"sdfsdfsfsd"
    },
    {
      name: "joyboy",
      path:"sdfsfsfds"
    },
    {
      name: "anaconda",
      path:"sdfsdfsdfsdf"
    },
    {
      name: "astroboy",
      path:"sdfsfdsdfsdf"
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
    await queryInterface.bulkDelete('Images', null, {});
  }
};
