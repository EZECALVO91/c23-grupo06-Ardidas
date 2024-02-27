"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert("Stocks",[
        {
          id_product: 1,
          id_size: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 1,
          id_size: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 1,
          id_size: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 1,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 1,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 1,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 2,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 2,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 2,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 2,
          id_size: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 2,
          id_size: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 3,
          id_size: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 3,
          id_size: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 3,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 3,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 3,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 4,
          id_size: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 4,
          id_size: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 4,
          id_size: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 4,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 4,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 5,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 5,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 5,
          id_size: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 5,
          id_size: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 5,
          id_size: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 6,
          id_size: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 6,
          id_size: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 6,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 6,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 7,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 7,
          id_size: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 7,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 7,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 8,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 8,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 8,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 8,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 9,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 9,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 9,
          id_size: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 9,
          id_size: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 10,
          id_size: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 10,
          id_size: 7,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 10,
          id_size: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 10,
          id_size: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 11,
          id_size: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 11,
          id_size: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 11,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 11,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product:12,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product:12,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product:12,
          id_size: 8,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 13,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 13,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 13,
          id_size: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 14,
          id_size: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id_product: 14,
          id_size: 9,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('Stocks', null, {});
     */
    await queryInterface.bulkDelete('Stocks', null, {});
  },
};
