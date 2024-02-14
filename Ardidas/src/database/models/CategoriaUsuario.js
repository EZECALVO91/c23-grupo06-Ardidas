module.exports = (sequelize,DataTypes) => {
    const alias = "Categorias";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        category:{
            type:DataTypes.STRING(75),
            allowNull: true,
        }
    }
    ;
    const config = {
        tableName:"category",
        timestamps: false
    };
    const Categoria = sequelize.define(alias,cols,config);
    return Categoria;
}