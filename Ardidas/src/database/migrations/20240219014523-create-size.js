'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sizes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      size: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Sizes');
  }
};