module.exports = (sequelize,DataTypes) => {
    const alias = "CategoriaProductos";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        categoria:{
            type:DataTypes.STRING(20),
            allowNull: false,
        },
    }
    ;
    const config = {
        tableName:"category_products",
        timestamps: false
    };
    const Categoria = sequelize.define(alias,cols,config);
    //CODIGOS DE ASOCIACION 
    Categoria.associate= function(models) {
        Categoria.hasMany(models.Usuarios,{
            as: 'categoriaProducto',
            foreignKey : 'id_category_products'
    })
}
    return Categoria;
}