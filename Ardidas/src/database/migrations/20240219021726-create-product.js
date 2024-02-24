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
      name: {
        allowNull: false,
        type: Sequelize.STRING(75)
      },
      price: {
        allowNull: true,
        type: Sequelize.DECIMAL(10,2)
      },
      description: {
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
        },
        onDelete:"cascade"
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Products');
  }
};