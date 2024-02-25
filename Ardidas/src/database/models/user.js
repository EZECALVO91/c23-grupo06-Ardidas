'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       // define association here

      this.belongsTo(models.Category,{
        as:'Categories',
        foreignKey:'id_category'
      })

      this.belongsToMany(models.Product,{
        as:'Products',
        through:'Carts',
        foreignKey:'id_user',
        otherKey:'id_product',
        timestamps:false
      })

    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
    date: DataTypes.DATEONLY,
    locality: DataTypes.STRING,
    aboutMe: DataTypes.TEXT,
    id_category: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};