const { DataTypes } = require('sequelize');
const db = require('../config/db');

const Event = db.define('event', {

    id_event: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_event: {
        type: DataTypes.STRING,
        allowNull: false
    },
    picture_event: {
        type: DataTypes.STRING,
        allowNull: false
    },
    start_event: {
        type: DataTypes.DATE,
        allowNull: false
    },
    end_event: {
        type: DataTypes.DATE,
        allowNull: false
    },
    location_event: {
        type: DataTypes.STRING,
        allowNull: false
    },
    price_event: {
        type: DataTypes.FLOAT,
        allowNull: false,
        defaultValue: 0
    },
    contributor_discount: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    is_free: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    is_visible: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
    },
    visible_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
    capacity_event: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: 'event',
    timestamps: false
})

// const EventUser = db.define('event_user', {}, 
// {
//     tableName: 'event_user',
//     timestamps: false
// });

db.sync()

module.exports = Event