'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Stock extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      this.hasMany(models.Product,{
        as:'Product',
        foreignKey:'id_product'
      })

      this.belongsTo(models.Color,{
        as:'Colors',
        foreignKey:'id_color'
      })

      this.belongsTo(models.Size,{
        as:'Sizes',
        foreignKey:'id_size'
      })
    }
  }
  Stock.init({
    product_id: DataTypes.INTEGER,
    id_size: DataTypes.INTEGER,
    id_color: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Stock',
  });
  return Stock;
};