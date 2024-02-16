module.exports = (sequelize,DataTypes) => {
    const alias = "Imagenes";
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
            allowNull: true,
        },
    }
    ;
    const config = {
        tableName:"image",
        timestamps: false
    };
    const Imagen = sequelize.define(alias,cols,config);
    // CODIGOS DE ASOCIACION 
    Imagen.associate= function(models) {
        Imagen.belongsTo(models.Usuarios,{
            as: 'usuarios',
            foreignKey : 'image_id'
    })
}

    
    return Imagen;
}
