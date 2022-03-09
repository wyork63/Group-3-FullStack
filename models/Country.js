const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Country model
class Country extends Model { }

//define table columns and configuration
Country.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //name should be at least 2 character long
                len: [2]
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'country'
    }
);

module.exports = Country;