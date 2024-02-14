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
            type:DataTypes.STRING(64),
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
    return Usuario;
}