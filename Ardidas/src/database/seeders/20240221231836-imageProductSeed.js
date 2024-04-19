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
        filename: 'Air-max-97-azules-costado.webp',
        id_product: 1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-beige-costado.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-beige-arriba.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-beige-diagonal.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-beige-atras.webp',
        id_product: 2,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-blancas-costado.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-blancas-arriba.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-blancas-diagonal.webp',
        id_product: 3,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-grises-costado.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-grises-arriba.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-grises-diagonal.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-grises-atras.webp',
        id_product: 4,
        createdAt:  new Date,
        updatedAt: new Date
      },

      {
        filename: 'Air-max-97-marrones-costado.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-marrones-arriba.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-marrones-diagonal.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-marrones-atras.webp',
        id_product: 5,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-negras-costado.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-negras-arriba.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-negras-diagonal.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-negras-atras.webp',
        id_product: 6,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-max-97-rosadas-costado.webp',
        id_product: 7,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-azules-costado.webp',
        id_product: 8,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-beige-costado.webp',
        id_product: 9,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-blancas-costado.webp',
        id_product: 10,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-blancas-arriba.webp',
        id_product: 10,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-blancas-diagonal.webp',
        id_product: 10,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-blancas-atras.webp',
        id_product: 10,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-grises-costado.webp',
        id_product: 11,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-negras-costado.webp',
        id_product: 12,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-negras-arriba.webp',
        id_product: 12,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-negras-diagonal.webp',
        id_product: 12,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-negras-atras.webp',
        id_product: 12,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-rojas-costado.webp',
        id_product: 13,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-rojas-arriba.webp',
        id_product: 13,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-rojas-diagonal.webp',
        id_product: 13,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-rojas-atras.webp',
        id_product: 13,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-force-rosadas-costado.webp',
        id_product: 14,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-azules-costado.webp',
        id_product: 15,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-azules-arriba.webp',
        id_product: 15,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-azules-diagonal.webp',
        id_product: 15,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-azules-atras.webp',
        id_product: 15,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-blancas-costado.webp',
        id_product: 16,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-blancas-arriba.webp',
        id_product: 16,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-blancas-diagonal.webp',
        id_product: 16,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-blancas-atras.webp',
        id_product: 16,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-grises-costado.webp',
        id_product: 17,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-grises-arriba.webp',
        id_product: 17,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-grises-diagonal.webp',
        id_product: 17,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-grises-atras.webp',
        id_product: 17,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-rojas-costado.webp',
        id_product: 18,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-rojas-arriba.webp',
        id_product: 18,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-rojas-diagonal.webp',
        id_product: 18,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Air-jordan-mid-rojas-atras.webp',
        id_product: 18,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Dunk-low-azules.webp',
        id_product: 19,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Dunk-low-rosadas.webp',
        id_product: 20,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-azules-costado.webp",
        id_product: 21,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-azules-arriba.webp",
        id_product: 21,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-azules-diagonal.webp",
        id_product: 21,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-azules-atras.webp",
        id_product: 21,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-blancas-costado.webp",
        id_product: 22,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-negras-costado.webp",
        id_product: 23,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-rosadas-costado.webp",
        id_product: 24,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-rosadas-arriba.webp",
        id_product: 24,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-rosadas-diagonal.webp",
        id_product: 24,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-zoom-pegasus-rosadas-atras.webp",
        id_product: 24,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-max-90-blancas-costado.webp",
        id_product: 25,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-max-90-blancas-arriba.webp",
        id_product: 25,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-max-90-blancas-diagonal.webp",
        id_product: 25,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-max-90-blancas-atras.webp",
        id_product: 25,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-max-90-rosadas-costado.webp",
        id_product: 26,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-max-90-rosadas-arriba.webp",
        id_product: 26,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-max-90-rosadas-diagonal.webp",
        id_product: 26,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Air-max-90-rosadas-atras.webp",
        id_product: 26,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-azules-costado.webp',
        id_product: 27,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-azules-arriba.webp',
        id_product: 27,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-azules-diagonal.webp',
        id_product: 27,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-azules-atras.webp',
        id_product: 27,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-blancas-costado.webp',
        id_product: 28,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-grises-costado.webp',
        id_product: 29,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-grises-arriba.webp',
        id_product: 29,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-grises-diagonal.webp',
        id_product: 29,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-grises-atras.webp',
        id_product: 29,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-negras-costado.webp',
        id_product: 30,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-negras-arriba.webp',
        id_product: 30,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-negras-diagonal.webp',
        id_product: 30,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-negras-atras.webp',
        id_product: 30,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-rosadas-costado.webp',
        id_product: 31,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-rosadas-arriba.webp',
        id_product: 31,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-rosadas-diagonal.webp',
        id_product: 31,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Revolution-6-next-nature-rosadas-atras.webp',
        id_product: 31,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-azules-costado.webp',
        id_product: 32,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-azules-arriba.webp',
        id_product: 32,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-azules-diagonal.webp',
        id_product: 32,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-azules-atras.webp',
        id_product: 32,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-blancas-costado.webp',
        id_product: 33,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-blancas-arriba.webp',
        id_product: 33,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-blancas-diagonal.webp',
        id_product: 33,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-blancas-atras.webp',
        id_product: 33,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-negras-costado.webp',
        id_product: 34,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-negras-arriba.webp',
        id_product: 34,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-negras-diagonal.webp',
        id_product: 34,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-negras-atras.webp',
        id_product: 34,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-rojas-costado.webp',
        id_product: 35,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-rojas-arriba.webp',
        id_product: 35,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-rojas-diagonal.webp',
        id_product: 35,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-rojas-atras.webp',
        id_product: 35,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-rosadas-costado.webp',
        id_product: 36,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-rosadas-arriba.webp',
        id_product: 36,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-rosadas-diagonal.webp',
        id_product: 36,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-9-rosadas-atras.webp',
        id_product: 36,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-10-azules-costado.webp',
        id_product: 37,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-10-azules-arriba.webp',
        id_product: 37,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-10-azules-diagonal.webp',
        id_product: 37,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-10-azules-atras.webp',
        id_product: 37,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-10-beige-costado.webp',
        id_product: 38,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-10-beige-arriba.webp',
        id_product: 38,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-10-beige-diagonal.webp',
        id_product: 38,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: 'Winflo-10-beige-atras.webp',
        id_product: 38,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Winflo-10-blancas-costado.webp",
        id_product: 39,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Winflo-10-blancas-arriba.webp",
        id_product: 39,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Winflo-10-blancas-diagonal.webp",
        id_product: 39,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Winflo-10-blancas-atras.webp",
        id_product: 39,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Winflo-10-negras-costado.webp",
        id_product: 40,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Winflo-10-negras-arriba.webp",
        id_product: 40,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Winflo-10-negras-diagonal.webp",
        id_product: 40,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        filename: "Winflo-10-negras-atras.webp",
        id_product: 40,
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
