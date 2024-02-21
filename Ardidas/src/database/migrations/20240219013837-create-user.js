'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
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
      email: {
        allowNull: false,
        unique:true,
        type: Sequelize.STRING(75)
      },
      password: {
        allowNull: false,
        type: Sequelize.STRING(100)
      },
      id_category: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Categories'
          },
          key:'id'
        }
      },
      date: {
        allowNull: true,
        type: Sequelize.DATE
      },
      localidad: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      sobremi: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      image_id: {
        unique:true,
        allowNull: true,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Images'
          },
          key:'id'
        },
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};