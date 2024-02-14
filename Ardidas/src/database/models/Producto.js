module.exports = (sequelize,DataTypes) => {
    const alias = "Productos";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        nombre:{
            type:DataTypes.STRING(75),
            allowNull: false,
        },
        precio:{
            type:DataTypes.DECIMAL(3,1),
            allowNull: true,
        },
        descripcion:{
            type:DataTypes.STRING(100),
            allowNull: true,
        }
    };
    const config = {
        tableName:"products",
        timestamps: false
    };
    const Producto = sequelize.define(alias,cols,config);
    return Producto;
}