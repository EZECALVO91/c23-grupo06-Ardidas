module.exports = (sequelize,DataTypes) => {
    const alias = "Talles";
    const cols = {
        id:{
            type:DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey:true,
        },
        tamaño:{
            type:DataTypes.STRING(15),
            allowNull: false,
        }
    }
    ;
    const config = {
        tableName:"talles",
        timestamps: false
    };
    const Talle = sequelize.define(alias,cols,config);
         //CODIGOS DE ASOCIACION 
        Talle.associate= function(models) {
            Talle.hasMany(models.Productos,{
                as: 'productos',
                foreignKey : 'id_talles'
        })
    
    }
    return Talle;
}