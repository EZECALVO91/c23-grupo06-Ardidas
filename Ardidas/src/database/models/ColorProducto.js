module.exports = (sequelize,DataTypes) => {
    const alias = "Colores";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
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
     //CODIGOS DE ASOCIACION 
    Color.associate= function(models) {
        Color.hasMany(models.Productos,{
            as: 'productos',
            foreignKey : 'color_id'
    })

}
    return Color;
}