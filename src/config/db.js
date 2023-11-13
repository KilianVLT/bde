const { Sequelize } = require("sequelize")

const db = new Sequelize('cpe', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = db