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
        id:1,
        name:'Eze Calvo',
        email:'eze@admin.com',
        password:"$2a$10$qPvE1uQsz9e97UCv0LYUfuXSHPcaF2Gexrcv6APFFuPhJGQqrI/ia",
        date:null,
        locality:'San Miguel',
        aboutMe:'Estoy practicando codeo1',
        id_image:1, 
        id_category:1,
      },
      {
        id:2,
        name:'Nico Badino',
        email:'nico@admin.com',
        password:"$2b$10$45qvZGb3G68rsrG1UT9Z/OKhLIU0zHNyhBcX8mK0Frc45to2.PJdi",
        date:null,
        locality:'Lanus',
        aboutMe:'Estoy practicando codeo2',
        id_image:2,
        id_category:1,
      },
      {
        id:3,
        name:'Leo Anchaba',
        email:'leo@admin.com',
        password:"$2a$10$zCFIBOuui10gr9NmsWkggO2af5YWSFxTFILYtYdndqq3BeZ7MOkFq",
        date:null,
        locality:'Lanus',
        aboutMe:'Estoy practicando codeo3',
        id_image:3,
        id_category:1,
      },
      {
        id:4,
        name:'Esteban Figueroa',
        email:'esteban@user.com',
        password:"$2a$10$2CW1elj6nBEst0LxjMnW.eyul/8UdGmtqEd5EGRLCtVa1yPzaKRT.",
        date:null,
        locality:'Lanus',
        aboutMe:'Estoy practicando codeo4',
        id_image:4,
        id_category:2,
      },
      {
        id:5,
        name:'Joaquin Gomez',
        email:'joaquin@user.com',
        password:"$2a$10$2CW1elj6nBEst0LxjMnW.eyul/8UdGmtqEd5EGRLCtVa1yPzaKRT.",
        date:null,
        locality:null,
        aboutMe:null,
        id_image:5,
        id_category:2,
      },
      {
        id:6,
        name:'Nombre de Prueba',
        email:'prueba@user.com',
        password:"$2a$10$2CW1elj6nBEst0LxjMnW.eyul/8UdGmtqEd5EGRLCtVa1yPzaKRT.",
        date:null,
        locality:null,
        aboutMe:null,
        id_image:6,
        id_category:2,
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
