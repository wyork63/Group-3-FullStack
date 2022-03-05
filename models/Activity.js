const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create Activity model
class Activity extends Model { }

//define table columns and configuration
Activity.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        activityName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                //name should be at least 6 character long
                len: [6]
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'activity'
    }
);

module.exports = Activity;