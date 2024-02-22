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
        id_category:1,
        date:null,
        localidad:'San Miguel',
        sobremi:'Estoy practicando codeo1',
        image_id:1,
      },
      {
        id:2,
        name:'Nico Badino',
        email:'nico@admin.com',
        password:"$2b$10$45qvZGb3G68rsrG1UT9Z/OKhLIU0zHNyhBcX8mK0Frc45to2.PJdi",
        id_category:1,
        date:null,
        localidad:'Lanus',
        sobremi:'Estoy practicando codeo2',
        image_id:2,
      },
      {
        id:3,
        name:'Leo Anchaba',
        email:'leo@admin.com',
        password:"$2a$10$zCFIBOuui10gr9NmsWkggO2af5YWSFxTFILYtYdndqq3BeZ7MOkFq",
        id_category:1,
        date:null,
        localidad:'Lanus',
        sobremi:'Estoy practicando codeo3',
        image_id:3,
      },
      {
        id:4,
        name:'Esteban Figueroa',
        email:'esteban@user.com',
        password:"$2a$10$2CW1elj6nBEst0LxjMnW.eyul/8UdGmtqEd5EGRLCtVa1yPzaKRT.",
        id_category:2,
        date:null,
        localidad:'Lanus',
        sobremi:'Estoy practicando codeo4',
        image_id:4,
      },
      {
        id:5,
        name:'Joaquin Gomez',
        email:'joaquin@user.com',
        password:"$2a$10$2CW1elj6nBEst0LxjMnW.eyul/8UdGmtqEd5EGRLCtVa1yPzaKRT.",
        id_category:2,
        date:null,
        localidad:null,
        sobremi:null,
        image_id:5,
      },
      {
        id:6,
        name:'Nombre de Prueba',
        email:'prueba@user.com',
        password:"$2a$10$2CW1elj6nBEst0LxjMnW.eyul/8UdGmtqEd5EGRLCtVa1yPzaKRT.",
        id_category:2,
        date:null,
        localidad:null,
        sobremi:null,
        image_id:6,
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
