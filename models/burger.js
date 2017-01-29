// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burgers = {

    // display all burgers
    all: function (cb) {
        orm.all("burgers", function (res) {
            cb(res);
        });
    },

    // create a burger
    create: function (cols, vals, cb) {
        orm.create("burgers", cols, vals, function (res) {
            cb(res);
        });
    },

    // update burger when eaten
    update: function (objColVals, condition, cb) {
        orm.update("burgers", objColVals, condition, function (res) {
            cb(res);
        });
    },

    // delete burger when digested
    delete: function (condition, cb) {
        orm.delete("burgers", condition, function () {
            cb();
        });
    }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burgers;