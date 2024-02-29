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

    await queryInterface.bulkInsert('Image_products', [
      {
        filename: 'nike5.webp',
        id_product: 1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 7,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 8,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 9,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 10,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 11,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 12,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 13,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 14,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 15,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 16,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 17,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 18,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 19,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 20,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 21,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 22,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 23,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 24,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 25,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 26,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikea4.webp',
        id_product: 27,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikea4.webp',
        id_product: 28,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikea4.webp',
        id_product: 29,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikea4.webp',
        id_product: 30,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 31,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 32,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 33,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 34,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikec2.webp',
        id_product: 35,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikec2.webp',
        id_product: 36,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikec2.webp',
        id_product: 37,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikec2.webp',
        id_product: 38,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 39,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 40,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 41,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 42,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 43,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 44,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 45,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 46,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 47,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 48,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 49,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 50,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 51,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 52,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 53,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 54,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 55,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 56,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 57,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 58,
        createdAt:  new Date,
        updatedAt: new Date
      },

  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Image_products', null, {});
     */
    await queryInterface.bulkDelete('Image_products', null, {});
  }
};
