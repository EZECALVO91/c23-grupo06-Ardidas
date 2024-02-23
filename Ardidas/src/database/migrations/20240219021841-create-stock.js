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
        }
      },
      id_size: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Sizes'
          },
          key:'id'
        }
      },
      id_color: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Colors'
          },
          key:'id'
        }
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Stocks');
  }
};