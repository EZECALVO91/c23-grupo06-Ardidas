module.exports = (sequelize,DataTypes) => {
    const alias = "ImagenProductos";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        nombre:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        path:{
            type:DataTypes.STRING(100),
            allowNull:false,
        }
    };
    const config = {
        tableName:"imagen_productos",
        timestamps: false
    };
    const ImagenProducto = sequelize.define(alias,cols,config);
    // CODIGOS DE ASOCIACION 
    Categoria.associate= function(models) {
        Categoria.belongsTo(models.Usuarios,{
            as: 'imagenesProducto',
            foreignKey : 'products_id'
    })
}
    return ImagenProducto;
}