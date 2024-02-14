module.exports = (sequelize,DataTypes) => {
    const alias = "Colores";
    const cols = {
        id:{
            type:DataTypes.BOOLEAN,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        color:{
            type:DataTypes.STRING(30),
            allowNull: false,
        }
    }
    ;
    const config = {
        tableName:"color",
        timestamps: false
    };
    const Color = sequelize.define(alias,cols,config);
    return Color;
}