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
        image:"1711402123079_img_.jpg",
        date:null,
        locality:'San Miguel',
        aboutMe:'Estoy practicando codeo1',
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
        name:'Nico Badino',
        email:'nico@live.com',
        password:"$2b$10$45qvZGb3G68rsrG1UT9Z/OKhLIU0zHNyhBcX8mK0Frc45to2.PJdi",
        image:"1705986980054_img_.png",
        date:null,
        locality:'Lanus',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-03-14",
        updatedAt: new Date
      },
      {
        name:'Esteban Figueroa',
        email:'esteban@user.com',
        password:"$2a$10$2CW1elj6nBEst0LxjMnW.eyul/8UdGmtqEd5EGRLCtVa1yPzaKRT.",
        image:"1705984007897_img_.png",
        date:null,
        locality:'Lanus',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-02-08",
        updatedAt: new Date
      },
      {
        name:'Owen Trejo',
        email:'owen@live.com',
        password:"$2a$10$Vy1TEok8XqX/ygrbTjQHOO3qO/fKxcfqYZwXjRWai.aouNHRGbIEm",
        image:"1713631715157_img_.jpg",
        date:null,
        locality:'CABA',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-01-26",
        updatedAt: new Date
      },
      {
        name:'Liliana Raquel',
        email:'lili@hotmail.com',
        password:"$2a$10$hdwZrgios/6zhQzof26hSuLSQHUSe2dDUMAGN6UZmDMpIZztF/1u6",
        image:"1713631744749_img_.jpg",
        date:null,
        locality:'San Miguel',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-01-25",
        updatedAt: new Date
      },
      {
        name:'Tamara Leiva',
        email:'tami@gmail.com',
        password:"$2a$10$OMgiZ24MltHxlm4DWmMBmeBYFmCiX.Dd7tTwxQRUCziGTVmO0sIXu",
        image:"1713631772671_img_.jpg",
        date:null,
        locality:'Jose c.Paz',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-01-24",
        updatedAt: new Date
      },
      {
        name:'Trinidad Postman',
        email:'trini89@gmail.com',
        password:"$10$zpfWImzp5lNY5u.kAItuUORg5HuXsJovspqv2BYXE3iXvB6SvneFW",
        image:"1713631847392_img_.jpg",
        date:null,
        locality:'Quilmes',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-01-24",
        updatedAt: new Date
      },
      {
        name:'Abraham Carillo',
        email:'abri57@hotmail.com',
        password:"$10$sdZ/uZxJW04a1bHDTvGKD.9mi/M5nc2eBfODt7aC0Z8CSQmAlzkLi",
        image:"1713631965243_img_.jpg",
        date:null,
        locality:'Resistencia, Chaco',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-01-23",
        updatedAt: new Date
      },
      {
        name:'Cristian Castro',
        email:'cris91@hotmail.com',
        password:"$10$a0fsUbAnS.lVQxp/O9YU0.5wA/kfvet8D/SP7UIcXwjXoa.TBXF1u",
        image:"1713631997168_img_.jpg",
        date:null,
        locality:'San Miguel',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-01-23",
        updatedAt: new Date
      },
      {
        name:'Jenifer Popit',
        email:'lajeny@live.com',
        password:"$2a$10$olEpdwrH6z7VH6ZwYG6JX.ZFXxrzsZSJgMXl4hU2Gz7h7/Ttk1o4m",
        image:"1713632048670_img_.jpg",
        date:null,
        locality:'Vicente Lopez',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2023-09-22",
        updatedAt: new Date
      },
      {
        name:'Romeo Trejo',
        email:'trejoromeo_2006@gmail.com',
        password:"$2a$10$q2fTteDI9trL.Deqkua98.stPMK52tcR8Db5iDyMfcKdKxKij5/oi",
        image:"1713632090926_img_.jpg",
        date:null,
        locality:'CABA',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2024-01-21",
        updatedAt: new Date
      },
      {
        name:'Melina Ceballos',
        email:'meli1988@hotmail.com',
        password:"$2a$10$GjizdK5gkMtXYhsnPRc2xuQcjaracg6ZodAnESEkJOz5EXEonmqHC",
        image:"1713632124044_img_.jpg",
        date:null,
        locality:'San Isidro',
        aboutMe:'Me encanta la sensación de comodidad y estilo que proporcionan mis zapatillas. Soy fanático de diseños modernos y llamativos que realmente destacan. Siempre estoy buscando marcas que ofrezcan calidad y una estética única. Además, valoro la versatilidad, así que busco zapatillas que puedan adaptarse a diferentes ocasiones y conjuntos. Para mí, las zapatillas son más que solo un calzado, son una expresión de mi estilo personal y una forma de destacar en cualquier lugar al que vaya',
        id_category:2,
        createdAt:  "2023-07-21",
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
