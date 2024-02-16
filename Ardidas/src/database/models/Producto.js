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
            type:DataTypes.DECIMAL(10,2),
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
    //CODIGOS DE ASOCIACION
    Producto.associate= function(models) {
        Producto.hasMany(models.ImagenProductos,{
            as: 'imagenesProductos',
            foreignKey : 'products_id'
    })

    Producto.belongsTo(models.CategoriaProductos,{
            as: 'categoriaProducto',
            foreignKey : 'id_category_products'
    })

    Producto.belongsTo(models.Talles,{
            as: 'talles',
            foreignKey : 'id_talles'
    })

    Producto.belongsTo(models.Colores,{
            as: 'colores',
            foreignKey : 'color_id'
    })
    
    //CODIGO DE ASOCIACION PARA TABLAS PIBOT
            Producto.belongsToMany(models.Usuarios,{
            as: 'usuarios',
            through: 'carrito',
            foreingKey: 'id_products',
            otherKey: 'id_usuarios',
            timestamps: false
        })
    
    }
    return Producto;
}