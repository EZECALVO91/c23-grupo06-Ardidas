module.exports = (sequelize,DataTypes) => {
    const alias = "CategoriaProductos";
    const cols = {
        id:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        categorua:{
            type:DataTypes.STRING(20),
            allowNull: false,
        },
    }
    ;
    const config = {
        tableName:"category_products",
        timestamps: false
    };
    const CategoriaProducto = sequelize.define(alias,cols,config);
    return CategoriaProducto;
}