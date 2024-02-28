'use strict';

// const {getJson } = require("../../utility/jsonMethod");
// const product = getJson("product")


// const data = product.map(products => {
//     products.id,
//     products.nombre,
//     products.talles,
//     products.color,
//     products.precio,
//     products.descripcion,
//     products.imagen,
//     products.category

//   return products
// })

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  //PRODUCTOS CREADOS CON EL MISMO JSON QUE VENIAMOS UTILIZANDO

  // await queryInterface.bulkInsert('Products',data ,{});
    
  //PRODUCTOS CREADOS A MANO

    await queryInterface.bulkInsert('Products', [
      {
        name:"Air Max Plus",
        color:"Beige",
        price:100000,
        description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
        id_category_product:1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        name:"Air Max Plus",
        color:"Beige",
        price:120000,
        description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
        id_category_product:1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        name:"Air Max Plus",
        color:"Beige",
        price:130000,
        description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
        id_category_product:1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        name:"Air Max Plus",
        color:"Beige",
        price:140000,
        description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
        id_category_product:1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        name:"Air Max Plus",
        color:"Beige",
        price:150000,
        description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
        id_category_product:1,
        createdAt:  new Date,
        updatedAt: new Date
    },
    {
      name:"Air Max Plus",
      color:"Beige",
      price:100000,
      description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
      id_category_product:1,
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      name:"Air Max II",
      color:"Rosa",
      price:120000,
      description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
      id_category_product:1,
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      name:"Air Max II",
      color:"Rosa",
      price:130000,
      description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
      id_category_product:1,
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      name:"Air Max II",
      color:"Rosa",
      price:140000,
      description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
      id_category_product:1,
      createdAt:  new Date,
      updatedAt: new Date
    },
    {
      name:"Air Max II",
      color:"Rosa",
      price:150000,
      description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
      id_category_product:1,
      createdAt:  new Date,
      updatedAt: new Date
  },
  {
    name:"Air Max II",
    color:"Rosa",
    price:100000,
    description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
    id_category_product:1,
    createdAt:  new Date,
    updatedAt: new Date
  },
  {
    name:"Air Max IV",
    color:"Negro",
    price:120000,
    description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
    id_category_product:1,
    createdAt:  new Date,
    updatedAt: new Date
  },
  {
    name:"Air Max IV",
    color:"Negro",
    price:130000,
    description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
    id_category_product:1,
    createdAt:  new Date,
    updatedAt: new Date
  },
  {
    name:"Air Max IV",
    color:"Negro",
    price:140000,
    description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
    id_category_product:1,
    createdAt:  new Date,
    updatedAt: new Date
  },
  {
    name:"Air Max IV",
    color:"Negro",
    price:150000,
    description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
    id_category_product:1,
    createdAt:  new Date,
    updatedAt: new Date
},
{
  name:"Air Max IV",
  color:"Negro",
  price:100000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:1,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max Skyline",
  color:"Gris",
  price:120000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max Skyline",
  color:"Gris",
  price:130000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max Skyline",
  color:"Gris",
  price:140000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max Skyline",
  color:"Gris",
  price:150000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
name:"Air Max Skyline",
color:"Gris",
price:100000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max 720",
color:"Beige",
price:120000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max 720",
color:"Beige",
price:130000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max 720",
color:"Beige",
price:140000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max 720",
color:"Beige",
price:150000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max 720",
color:"Beige",
price:100000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max+",
color:"Negro",
price:120000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max+",
color:"Negro",
price:130000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max+",
color:"Negro",
price:140000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max+",
color:"Negro",
price:150000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
  name:"Air Max 200",
  color:"Blanco",
  price:100000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max 200",
  color:"Blanco",
  price:120000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max 200",
  color:"Blanco",
  price:130000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max 200",
  color:"Blanco",
  price:140000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max I",
  color:"Rojo",
  price:150000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:2,
  createdAt:  new Date,
  updatedAt: new Date
},
{
name:"Air Max I",
color:"Rojo",
price:100000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max I",
color:"Rojo",
price:120000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max I",
color:"Rojo",
price:130000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:2,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Total Max 95",
color:"Gris",
price:140000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Total Max 95",
color:"Gris",
price:150000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Total Max 95",
color:"Gris",
price:100000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Total Max 95",
color:"Gris",
price:120000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max Solas",
color:"Rosa",
price:130000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max Solas",
color:"Rosa",
price:140000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max Solas",
color:"Rosa",
price:150000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
  name:"Air Max Solas",
  color:"Rosa",
  price:100000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:3,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max LTDx",
  color:"Beige",
  price:120000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:3,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max LTDx",
  color:"Beige",
  price:130000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:3,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max LTDx",
  color:"Beige",
  price:140000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:3,
  createdAt:  new Date,
  updatedAt: new Date
},
{
  name:"Air Max LTDx",
  color:"Beige",
  price:150000,
  description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
  id_category_product:3,
  createdAt:  new Date,
  updatedAt: new Date
},
{
name:"Air Max LTD 2",
color:"Negro",
price:100000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max LTD 2",
color:"Negro",
price:120000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max LTD 2",
color:"Negro",
price:130000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Nike AirMax",
color:"Blanco",
price:140000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Nike AirMax",
color:"Blanco",
price:150000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Nike AirMax",
color:"Blanco",
price:100000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:3,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max+ 2009",
color:"Beige",
price:120000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:1,
createdAt:  new Date,
updatedAt: new Date
},
{
name:"Air Max+ 2009",
color:"Beige",
price:130000,
description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
id_category_product:1,
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
     * await queryInterface.bulkDelete('Products', null, {});
     */
    await queryInterface.bulkDelete('Products', null, {});
  }
};
