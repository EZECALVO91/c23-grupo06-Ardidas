'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.belongsTo(models.Category_product,{
        as:'Category_products',
        foreignKey:'id_category_product'
      })

      this.hasMany(models.Image_product,{
        as:'Image_products',
        foreignKey:'id_product'
      })

      this.belongsToMany(models.User,{
        as:'Users',
        through:'Carts',
        foreignKey:'id_product',
        otherKey:'id_user',
        timestamps:false
      }) 
      
      this.belongsToMany(models.Size,{
        as:'Sizes',
        through:'Stocks',
        foreignKey:'id_product',
        otherKey:'id_size',
        timestamps:false
      }) 

    }
  }
  Product.init({
    name: DataTypes.STRING,
    color: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    id_category_product: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};