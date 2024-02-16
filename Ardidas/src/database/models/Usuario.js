module.exports = (sequelize,DataTypes) => {
    const alias = "Usuarios";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        name:{
            type:DataTypes.STRING(50),
            allowNull: false,
        },
        email:{
            type:DataTypes.STRING(50),
            allowNull: false,
            unique: true,
        },
        password:{
            type:DataTypes.STRING(100),
            allowNull: false,
        },
        date:{
            type:DataTypes.DATEONLY,
            allowNull: true,
        },
        localidad:{
            type:DataTypes.STRING(50),
            allowNull: true,
        },
        sobremi:{
            type:DataTypes.TEXT,
            allowNull: true,
        }
    };
    const config = {
        tableName:"usuarios",
        timestamps: false
    };
    const Usuario = sequelize.define(alias,cols,config);
    //CODIGOS DE ASOCIACION 
    Usuario.associate= function(models) {
        Usuario.belongsTo(models.Imagenes,{
            as: 'imagenes',
            foreignKey : 'image_id'
    })

        Usuario.belongsTo(models.Categorias,{
            as: 'categoria',
            foreignKey : 'id_category'
    })
    
    // CODIGO DE ASOCIACION PARA TABLAS PIBOT
        Usuario.belongsToMany(models.Productos,{
            as: 'productos',
            through: 'carrito',
            foreingKey: 'id_usuarios',
            otherKey: 'id_products',
            timestamps: false
    })
    }
    return Usuario;
}
