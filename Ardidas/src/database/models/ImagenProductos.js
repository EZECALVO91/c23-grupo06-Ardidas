module.exports = (sequelize,DataTypes) => {
    const alias = "ImagenProductos";
    const cols = {
        id:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        nombre:{
            type:DataTypes.STRING(255),
            allowNull: false,
        },
        contenido:{
            type:DataTypes.BLOB,
            allowNull:false,
        }
    }
    ;
    const config = {
        tableName:"imagen_productos",
        timestamps: false
    };
    const ImagenProducto = sequelize.define(alias,cols,config);
    return ImagenProducto;
}