'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category_product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Product,{
        as:'Products',
        foreignKey:'id_category_product'
      })
    }
  }
  Category_product.init({
    category: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category_product',
  });
  return Category_product;
};