module.exports = (sequelize,DataTypes) => {
    const alias = "Imagenes";
    const cols = {
        id:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        nombre:{
            type:DataTypes.STRING(255),
            allowNull: true,
        },
        contenido:{
            type:DataTypes.STRING(255),
            allowNull: true,
        }
    }
    ;
    const config = {
        tableName:"image",
        timestamps: false
    };
    const Imagen = sequelize.define(alias,cols,config);
    return Imagen;
}