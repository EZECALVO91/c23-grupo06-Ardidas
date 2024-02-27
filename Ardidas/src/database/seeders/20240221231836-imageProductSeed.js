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
        id_product: 1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike6.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike7.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikea4.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikea4.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikea4.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikea4.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 7,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 7,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 7,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikeb3.webp',
        id_product: 7,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikec2.webp',
        id_product: 8,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikec2.webp',
        id_product: 8,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikec2.webp',
        id_product: 8,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nikec2.webp',
        id_product: 8,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 9,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 9,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
        id_product: 9,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike8.webp',
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
        id_product: 10,
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
        id_product: 10,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 11,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 11,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
        id_product: 11,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike5.webp',
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
        id_product: 12,
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
        filename: 'nikeb3.webp',
        id_product: 13,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 13,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'nike9.webp',
        id_product: 13,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'John Doe',
        id_product: 14,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'John Doe',
        id_product: 14,
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
