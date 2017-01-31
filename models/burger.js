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
    devoured: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    }
}, {
    timestamps: false
});

burger.sync();

module.exports = burger;