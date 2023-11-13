const { DataTypes } = require('sequelize');
const db = require('../config/db');


const User = db.define('user', {

    id_user: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    phone_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sector_user: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year_user: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_contributor: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    is_member: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
}, {
    tableName: 'user',
    timestamps: false
})

db.sync()

module.exports = User