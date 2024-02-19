'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Talles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tamaño: {
        allowNull: false,
        type: Sequelize.STRING(20)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Talles');
  }
};