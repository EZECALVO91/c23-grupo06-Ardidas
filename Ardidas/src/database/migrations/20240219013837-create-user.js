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
      image: {
        allowNull: false,
        type: Sequelize.STRING(80)
      },
      date: {
        allowNull: true,
        type: Sequelize.DATEONLY
      },
      locality: {
        allowNull: true,
        type: Sequelize.STRING(100)
      },
      aboutMe: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      id_category: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references:{
          model:{
            tableName:'Categories'
          },
          key:'id'
        },
        onDelete:"cascade"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATEONLY
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};