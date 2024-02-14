module.exports = (sequelize,DataTypes) => {
    const alias = "Talles";
    const cols = {
        id:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        tamaño:{
            type:DataTypes.STRING(75),
            allowNull: false,
        }
    }
    ;
    const config = {
        tableName:"talles",
        timestamps: false
    };
    const Talle = sequelize.define(alias,cols,config);
    return Talle;
}