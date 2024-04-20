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
        name:"Nike Air Max 97",
        color:"Azules",
        price:105000,
        description:"Impulsa tu estilo a toda velocidad con el Air Max 97. El diseño icónico está inspirado en las gotas de agua y los trenes bala japoneses. La amortiguación Nike Air de largo completo te permite andar con comodidad de alto rendimiento. Amárrate las agujetas y sal a dar un paseo de primera clase.",
        id_category_product:1,
        createdAt:  new Date,
        updatedAt: new Date
      },
      {
        name:"Nike Air Max 97",
        color:"Beige",
        price:180000,
        description:"Elegante. Con estilo. Simple. El diseño del Air Max 97 inspirado en el agua es ideal tanto para correr como para salir una noche por la ciudad. La amortiguación Nike Air de largo completo te permite andar con comodidad de alto rendimiento.",
        id_category_product:2,
        createdAt:  "2024-01-26",
        updatedAt: new Date
      },
      {
        name:"Nike Air Max 97",
        color:"Blancas",
        price:230000,
        description:"Impulsa tu estilo a toda velocidad con el Air Max 97. El diseño icónico está inspirado en las gotas de agua y los trenes bala japoneses. La amortiguación Nike Air de largo completo te permite andar con comodidad de alto rendimiento. Amárrate las agujetas y sal a dar un paseo de primera clase.",
        id_category_product:3,
        createdAt:  "2024-01-26",
        updatedAt: new Date
      },
      {
        name:"Nike Air Max 97",
        color:"Grises",
        price:140000,
        description:"Elegante. Con estilo. Simple. El diseño del Air Max 97 inspirado en el agua es ideal tanto para correr como para salir una noche por la ciudad. La amortiguación Nike Air de largo completo te permite andar con comodidad de alto rendimiento.",
        id_category_product:4,
        createdAt:  "2024-01-26",
        updatedAt: new Date
      },
      {
        name:"Nike Air Max 97",
        color:"Marrones",
        price:150000,
        description:"Elegante. Con estilo. Simple. El diseño del Air Max 97 inspirado en el agua es ideal tanto para correr como para salir una noche por la ciudad. La amortiguación Nike Air de largo completo te permite andar con comodidad de alto rendimiento.",
        id_category_product:1,
        createdAt:  "2024-01-26",
        updatedAt: new Date
    },
    {
      name:"Nike Air Max 97",
      color:"Negras",
      price:100000,
      description:"Impulsa tu estilo a toda velocidad con el Air Max 97. El diseño icónico está inspirado en las gotas de agua y los trenes bala japoneses. La amortiguación Nike Air de largo completo te permite andar con comodidad de alto rendimiento. Amárrate las agujetas y sal a dar un paseo de primera clase.",
      id_category_product:1,
      createdAt:  "2024-01-26",
      updatedAt: new Date
    },
    {
      name:"Nike Air Max 97",
      color:"Rosadas",
      price:120000,
      description:"mpulsa tu estilo a toda velocidad con el Nike Air Max 97. Su icónico diseño ondulado se inspira en los trenes bala japoneses. Además, la amortiguación Nike Air de largo completo te permite moverte con comodidad de primer nivel donde sea que te lleve el día.",
      id_category_product:2,
      createdAt:  "2024-01-26",
      updatedAt: new Date
    },
    {
      name:"Nike Air Force 1",
      color:"Azules",
      price:130000,
      description:"El fulgor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
      id_category_product:3,
      createdAt:  "2024-01-26",
      updatedAt: new Date
    },
    {
      name:"Nike Air Force 1",
      color:"Beige",
      price:170000,
      description:"El fulgor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
      id_category_product:4,
      createdAt:  "2024-01-26",
      updatedAt: new Date
    },
    {
      name:"Nike Air Force 1",
      color:"Blancas",
      price:190000,
      description:"El fulgor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
      id_category_product:4,
      createdAt:  "2024-01-26",
      updatedAt: new Date
  },
  {
    name:"Nike Air Force 1",
    color:"Grises",
    price:170000,
    description:"El fulgor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
    id_category_product:2,
    createdAt:  "2024-01-26",
    updatedAt: new Date
  },
  {
    name:"Nike Air Force 1",
    color:"Negras",
    price:220000,
    description:"El fulgor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
    id_category_product:3,
    createdAt:  "2024-01-26",
    updatedAt: new Date
  },
  {
    name:"Nike Air Force 1",
    color:"Rojas",
    price:130000,
    description:"El fulgor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
    id_category_product:1,
    createdAt:  "2024-01-26",
    updatedAt: new Date
  },
  {
    name:"Nike Air Force 1",
    color:"Rosadas",
    price:140000,
    description:"El fulgor vive en el Nike Air Force 1 ’07, el OG de básquetbol que le da un toque fresco a lo que mejor conoces: revestimientos con costuras duraderas, acabados impecables y la cantidad perfecta de destellos para que brilles.",
    id_category_product:1,
    createdAt:  "2024-01-26",
    updatedAt: new Date
  },
  //Hasta aca arriba van 14
  {
    name:"Nike Air Jordan Mid",
    color:"Azules",
    price:150000,
    description:"Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva.",
    id_category_product:1,
    createdAt:  "2024-01-26",
    updatedAt: new Date
},
{
  name:"Nike Air Jordan Mid",
  color:"Blancas",
  price:200000,
  description:"Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva.",
  id_category_product:2,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
  name:"Nike Air Jordan Mid",
  color:"Grises",
  price:220000,
  description:"Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva.",
  id_category_product:2,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
  name:"Nike Air Jordan Mid",
  color:"Rojas",
  price:130000,
  description:"Inspirada en el AJ1 original, esta edición de corte mid mantiene el look icónico que te encanta, y los colores selectos y el cuero impecable le dan una identidad distintiva.",
  id_category_product:4,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
  name:"Nike Dunk Low",
  color:"Azules",
  price:140000,
  description:"El ícono del básquetbol de los 80, que se creó para la cancha pero conquistó las calles, vuelve con revestimientos perfectamente brillantes y colores del equipo clásicos. Con su diseño icónico de básquetbol, el clásico Nike Dunk Low canaliza el espíritu vintage de la década de los 80 y vuelve a las calles, al tiempo que su cuello acolchado de corte low te permite llevar tu juego a cualquier lugar con comodidad.",
  id_category_product:2,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
  name:"Nike Dunk Low",
  color:"Rosadas",
  price:150000,
  description:"El ícono del básquetbol de los 80, que se creó para la cancha pero conquistó las calles, vuelve con revestimientos perfectamente brillantes y colores del equipo clásicos. Con su diseño icónico de básquetbol, el clásico Nike Dunk Low canaliza el espíritu vintage de la década de los 80 y vuelve a las calles, al tiempo que su cuello acolchado de corte low te permite llevar tu juego a cualquier lugar con comodidad.",
  id_category_product:2,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
name:"Nike Air Zoom Pegasus",
color:"Azules",
price:100000,
description:"ENERGÍA DURANTE KILÓMETROS. El running es tu ritual diario; cada paso te lleva más cerca de tu objetivo personal. Ya sea en el entrenamiento o corriendo, llega a nuevas alturas con el Nike Air Zoom Pegasus 39 y su diseño intuitivo.",
id_category_product:1,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Air Zoom Pegasus",
color:"Blancas",
price:220000,
description:"ENERGÍA DURANTE KILÓMETROS. El running es tu ritual diario; cada paso te lleva más cerca de tu objetivo personal. Ya sea en el entrenamiento o corriendo, llega a nuevas alturas con el Nike Air Zoom Pegasus 39 y su diseño intuitivo.",
id_category_product:3,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Air Zoom Pegasus",
color:"Negras",
price:230000,
description:"ENERGÍA DURANTE KILÓMETROS. El running es tu ritual diario; cada paso te lleva más cerca de tu objetivo personal. Ya sea en el entrenamiento o corriendo, llega a nuevas alturas con el Nike Air Zoom Pegasus 39 y su diseño intuitivo.",
id_category_product:4,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Air Zoom Pegasus",
color:"Rosadas",
price:240000,
description:"ENERGÍA DURANTE KILÓMETROS. El running es tu ritual diario; cada paso te lleva más cerca de tu objetivo personal. Ya sea en el entrenamiento o corriendo, llega a nuevas alturas con el Nike Air Zoom Pegasus 39 y su diseño intuitivo.",
id_category_product:4,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Air Max 90",
color:"Blancas",
price:150000,
description:"Nada más ligero, nada más cómodo, nada más probado: el Nike Air Max 90 se mantiene fiel a sus raíces con la icónica suela tipo waffle, los revestimientos cosidos y los detalles clásicos de TPU. Los nuevos detalles le dan un look moderno, al mismo tiempo que la amortiguación Max Air agrega comodidad a tu recorrido.",
id_category_product:4,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Air Max 90",
color:"Rosadas",
price:100000,
description:"Nada más ligero, nada más cómodo, nada más probado: el Nike Air Max 90 se mantiene fiel a sus raíces con la icónica suela tipo waffle, los revestimientos cosidos y los detalles clásicos de TPU. Los nuevos detalles le dan un look moderno, al mismo tiempo que la amortiguación Max Air agrega comodidad a tu recorrido.",
id_category_product:4,
createdAt:  "2024-01-26",
updatedAt: new Date
},
////van 26
{
name:"Nike Revolution 6 Next Nature",
color:"Azules",
price:120000,
description:"Por nuevos desafíos en el pavimento. Ata las agujetas 100% recicladas y marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature. Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave. Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso.",
id_category_product:4,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Revolution 6 Next Nature",
color:"Blancas",
price:230000,
description:"Por nuevos desafíos en el pavimento. Ata las agujetas 100% recicladas y marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature. Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave. Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso.",
id_category_product:3,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Revolution 6 Next Nature",
color:"Grises",
price:240000,
description:"Por nuevos desafíos en el pavimento. Ata las agujetas 100% recicladas y marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature. Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave. Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso.",
id_category_product:2,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Revolution 6 Next Nature",
color:"Negras",
price:250000,
description:"Por nuevos desafíos en el pavimento. Ata las agujetas 100% recicladas y marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature. Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave. Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso.",
id_category_product:2,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
  name:"Nike Revolution 6 Next Nature",
  color:"Rosadas",
  price:100000,
  description:"Por nuevos desafíos en el pavimento. Ata las agujetas 100% recicladas y marca el ritmo al comienzo de tu experiencia de running con la sensación de suavidad del Nike Revolution 6 Next Nature. Sabemos que la comodidad es la clave de una carrera exitosa, así que nos aseguramos de que tus pasos sean amortiguados y flexibles para brindar una pisada suave. Es una evolución de un favorito, con un diseño transpirable confeccionado con al menos un 20% de contenido reciclado por peso.",
  id_category_product:1,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
  name:"Nike Winflo 9",
  color:"Azules",
  price:220000,
  description:"AJUSTE LIGERO Y CÓMODO PARA UNA PISADA ENÉRGICA. El Winflo 9 te brinda el soporte que necesitas para igualar tu velocidad. Además, cuenta con un ajuste seguro que mantiene el pie en su sitio en cada kilómetro. Agregamos mucha espuma en toda la entresuela, dándote más energía a cada paso.",
  id_category_product:2,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
  name:"Nike Winflo 9",
  color:"Blancas",
  price:130000,
  description:"AJUSTE LIGERO Y CÓMODO PARA UNA PISADA ENÉRGICA. El Winflo 9 te brinda el soporte que necesitas para igualar tu velocidad. Además, cuenta con un ajuste seguro que mantiene el pie en su sitio en cada kilómetro. Agregamos mucha espuma en toda la entresuela, dándote más energía a cada paso.",
  id_category_product:3,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
  name:"Nike Winflo 9",
  color:"Negras",
  price:140000,
  description:"AJUSTE LIGERO Y CÓMODO PARA UNA PISADA ENÉRGICA. El Winflo 9 te brinda el soporte que necesitas para igualar tu velocidad. Además, cuenta con un ajuste seguro que mantiene el pie en su sitio en cada kilómetro. Agregamos mucha espuma en toda la entresuela, dándote más energía a cada paso.",
  id_category_product:2,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
  name:"Nike Winflo 9",
  color:"Rojas",
  price:150000,
  description:"AJUSTE LIGERO Y CÓMODO PARA UNA PISADA ENÉRGICA. El Winflo 9 te brinda el soporte que necesitas para igualar tu velocidad. Además, cuenta con un ajuste seguro que mantiene el pie en su sitio en cada kilómetro. Agregamos mucha espuma en toda la entresuela, dándote más energía a cada paso.",
  id_category_product:3,
  createdAt:  "2024-01-26",
  updatedAt: new Date
},
{
name:"Nike Winflo 9",
color:"Rosadas",
price:300000,
description:"AJUSTE LIGERO Y CÓMODO PARA UNA PISADA ENÉRGICA. El Winflo 9 te brinda el soporte que necesitas para igualar tu velocidad. Además, cuenta con un ajuste seguro que mantiene el pie en su sitio en cada kilómetro. Agregamos mucha espuma en toda la entresuela, dándote más energía a cada paso.",
id_category_product:4,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Winflo 10",
color:"Azules",
price:220000,
description:"Ponte el Winflo 10, un recorrido equilitopdo que impulsará tu carrera, ya sea que seas una persona rutinaria que registra sus kilómetros semanales, un amateur con la esperanza de convertir la curiosidad en rutina o simplemente acompañes a un amigo a una carrera esporádica de fin de semana.",
id_category_product:4,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Winflo 10",
color:"Beige",
price:230000,
description:"Ponte el Winflo 10, un recorrido equilitopdo que impulsará tu carrera, ya sea que seas una persona rutinaria que registra sus kilómetros semanales, un amateur con la esperanza de convertir la curiosidad en rutina o simplemente acompañes a un amigo a una carrera esporádica de fin de semana.",
id_category_product:2,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Winflo 10",
color:"Blancas",
price:240000,
description:"Ponte el Winflo 10, un recorrido equilitopdo que impulsará tu carrera, ya sea que seas una persona rutinaria que registra sus kilómetros semanales, un amateur con la esperanza de convertir la curiosidad en rutina o simplemente acompañes a un amigo a una carrera esporádica de fin de semana.",
id_category_product:3,
createdAt:  "2024-01-26",
updatedAt: new Date
},
{
name:"Nike Winflo 10",
color:"Negras",
price:150000,
description:"Ponte el Winflo 10, un recorrido equilitopdo que impulsará tu carrera, ya sea que seas una persona rutinaria que registra sus kilómetros semanales, un amateur con la esperanza de convertir la curiosidad en rutina o simplemente acompañes a un amigo a una carrera esporádica de fin de semana.",
id_category_product:1,
createdAt:  "2024-01-26",
updatedAt: new Date
},
// {
// name:"Air Total Max 95",
// color:"Grises",
// price:100000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Air Total Max 95",
// color:"Grises",
// price:120000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Air Max Solas",
// color:"Rosadas",
// price:130000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Air Max Solas",
// color:"Rosadas",
// price:140000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Air Max Solas",
// color:"Rosadas",
// price:150000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
//   name:"Air Max Solas",
//   color:"Rosadas",
//   price:100000,
//   description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
//   id_category_product:3,
//   createdAt:  "2024-01-26",
//   updatedAt: new Date
// },
// {
//   name:"Air Max LTDx",
//   color:"Beige",
//   price:120000,
//   description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
//   id_category_product:3,
//   createdAt:  "2024-01-26",
//   updatedAt: new Date
// },
// {
//   name:"Air Max LTDx",
//   color:"Beige",
//   price:130000,
//   description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
//   id_category_product:3,
//   createdAt:  "2024-01-26",
//   updatedAt: new Date
// },
// {
//   name:"Air Max LTDx",
//   color:"Beige",
//   price:140000,
//   description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
//   id_category_product:3,
//   createdAt:  "2024-01-26",
//   updatedAt: new Date
// },
// {
//   name:"Air Max LTDx",
//   color:"Beige",
//   price:150000,
//   description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
//   id_category_product:3,
//   createdAt:  "2024-01-26",
//   updatedAt: new Date
// },
// {
// name:"Air Max LTD 2",
// color:"Negras",
// price:100000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Air Max LTD 2",
// color:"Negras",
// price:120000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Air Max LTD 2",
// color:"Negras",
// price:130000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Nike AirMax",
// color:"Blancas",
// price:140000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Nike AirMax",
// color:"Blancas",
// price:150000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Nike AirMax",
// color:"Blancas",
// price:100000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:3,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Air Max+ 2009",
// color:"Beige",
// price:120000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:1,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// },
// {
// name:"Air Max+ 2009",
// color:"Beige",
// price:130000,
// description:"Max Air se refiere a una línea de zapatillas deportivas fabricadas por la marca Nike. Estas zapatillas son conocidas por su tecnología de amortiguación de aire visible, que proporciona una excelente comodidad y absorción de impactos durante la actividad física.",
// id_category_product:1,
// createdAt:  "2024-01-26",
// updatedAt: new Date
// }
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
