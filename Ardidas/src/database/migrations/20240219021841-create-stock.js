'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Stocks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        
      },
      id_product: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Products'
          },
          key:'id'
        },
        onDelete:"cascade"
      },
      id_size: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Sizes'
          },
          key:'id'
        },
        onDelete:"cascade"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stocks');
  }
};