'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      precio: {
        allowNull: true,
        type: Sequelize.DECIMAL(10,2)
      },
      descripcion: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      id_category_product: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Category_products'
          },
          key:'id'
        }
      },
      id_talles: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Talles'
          },
          key:'id'
        }
      },
      color_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Colors'
          },
          key:'id'
        }
      }

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};