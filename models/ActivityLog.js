const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//create ActivityLog model
class ActivityLog extends Model { }

//define table columns and configuration
ActivityLog.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        Activity_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'activity',
                key: 'id'
            }
        },
        post_Id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'activityLog'
    },
    
);

module.exports = ActivityLog;