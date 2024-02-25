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
    await queryInterface.bulkInsert('Users', [
      {
        name:'Eze Calvo',
        email:'eze@admin.com',
        password:"$2a$10$qPvE1uQsz9e97UCv0LYUfuXSHPcaF2Gexrcv6APFFuPhJGQqrI/ia",
        image:"1705951786634_img_.png",
        date:null,
        locality:'San Miguel',
        aboutMe:'Estoy practicando codeo1',
        id_category:1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        name:'Nico Badino',
        email:'nico@admin.com',
        password:"$2b$10$45qvZGb3G68rsrG1UT9Z/OKhLIU0zHNyhBcX8mK0Frc45to2.PJdi",
        image:"1705986980054_img_.png",
        date:null,
        locality:'Lanus',
        aboutMe:'Estoy practicando codeo2',
        id_category:1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        name:'Leo Anchaba',
        email:'leo@admin.com',
        password:"$2a$10$zCFIBOuui10gr9NmsWkggO2af5YWSFxTFILYtYdndqq3BeZ7MOkFq",
        image:"1705980353916_img_.jpg",
        date:null,
        locality:'Lanus',
        aboutMe:'Estoy practicando codeo3',
        id_category:1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        name:'Esteban Figueroa',
        email:'esteban@user.com',
        password:"$2a$10$2CW1elj6nBEst0LxjMnW.eyul/8UdGmtqEd5EGRLCtVa1yPzaKRT.",
        image:"1705984007897_img_.png",
        date:null,
        locality:'Lanus',
        aboutMe:'Estoy practicando codeo4',
        id_category:2,
        createdAt:  new Date,
        updatedAt: new Date
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
    await queryInterface.bulkDelete('Users', null, {});
  }
};
