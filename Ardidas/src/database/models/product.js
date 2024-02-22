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
      this.belongsTo(models.Color,{
        as:'colors',
        foreignKey:'color_id'
      })

      this.belongsTo(models.Talle,{
        as:'talles',
        foreignKey:'id_talles'
      })

      this.belongsTo(models.Category_product,{
        as:'categoryes_product',
        foreignKey:'id_category_product'
      })

      this.hasMany(models.Imagen_producto,{
        as:'imagenProducto',
        foreignKey:'product_id'
      })

      this.belongsToMany(models.User,{
        as:'usuarios',
        through:'Carritos',
        foreignKey:'id_product',
        otherKey:'id_usuario',
        timestamps:false
      })

    }
  }
  Product.init({
    nombre: DataTypes.STRING,
    precio: DataTypes.DECIMAL,
    descripcion: DataTypes.STRING,
    id_category_product: DataTypes.INTEGER,
    id_talles: DataTypes.INTEGER,
    color_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};