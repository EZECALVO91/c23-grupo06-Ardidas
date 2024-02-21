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
        password:'12345',
        id_category:1,
        date:null,
        localidad:'San Miguel',
        sobremi:'Estoy practicando codeo1',
        image_id:null,
      },
      {
        id:2,
        name:'Nico Badino',
        email:'nico@admin.com',
        password:'12345',
        id_category:1,
        date:null,
        localidad:'Lanus',
        sobremi:'Estoy practicando codeo2',
        image_id:null,
      },
      {
        id:3,
        name:'Leo Anchaba',
        email:'leo@admin.com',
        password:'12345',
        id_category:1,
        date:null,
        localidad:'Lanus',
        sobremi:'Estoy practicando codeo3',
        image_id:null,
      },
      {
        id:4,
        name:'Esteban Figueroa',
        email:'esteban@user.com',
        password:'12345',
        id_category:2,
        date:null,
        localidad:'Lanus',
        sobremi:'Estoy practicando codeo4',
        image_id:null,
      },
      {
        id:5,
        name:'Joaquin Gomez',
        email:'joaquin@user.com',
        password:'12345',
        id_category:2,
        date:null,
        localidad:null,
        sobremi:null,
        image_id:null,
      },
      {
        id:6,
        name:'Nombre de Prueba',
        email:'prueba@user.com',
        password:'12345',
        id_category:2,
        date:null,
        localidad:null,
        sobremi:null,
        image_id:null,
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
