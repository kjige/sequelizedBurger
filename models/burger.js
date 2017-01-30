var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");

var burger = sequelize.define("burgers", {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING
    },
    eaten: {
        type: Sequelize.BOOLEAN
    }
}, {
    timestamps: false
});

burger.sync();

module.exports = burger;