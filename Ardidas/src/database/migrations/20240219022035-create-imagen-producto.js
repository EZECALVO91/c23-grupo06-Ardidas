'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Imagen_productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        allowNull: false,
        type: Sequelize.STRING(150)
      },
      path: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      id_producto: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Products'
          },
          key:'id'
        }
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Imagen_productos');
  }
};