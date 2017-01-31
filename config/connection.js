var mysql = require("mysql");
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize
var sequelize = new Sequelize("sequelize_burgers_db", "root", "root", {
    host: "localhost",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    }
});

module.exports = sequelize;