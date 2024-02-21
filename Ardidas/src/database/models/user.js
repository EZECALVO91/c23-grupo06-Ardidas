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
      this.hasOne(models.Image,{
        as:'Images',
        foreignKey:'image_id'
      })

      this.belongsTo(models.Category,{
        as:'categoryes',
        foreignKey:'id_category'
      })

      this.belongsToMany(models.User,{
        as:'productos',
        through:'Carritos',
        foreignKey:'id_usuario',
        otherKey:'id_product',
        timestamps:false
      })

    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    id_category: DataTypes.INTEGER,
    date: DataTypes.DATE,
    localidad: DataTypes.STRING,
    sobremi: DataTypes.TEXT,
    image_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};