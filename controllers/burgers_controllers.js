var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var db = require("../models");
var burgers = db.burger;

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burgers.findAll({
        order: "name"
    }).then(function (data) {
        var hbsObj = {
            burgers: data
        };
        res.render("index", hbsObj);
    });
});

router.post("/", function (req, res) {
    burgers.create({
        name: req.body.name,
        devoured: req.body.devoured
    }).then(function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    burgers.update({
        devoured: req.body.devoured
    }, {
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.redirect("/");
    });
});

router.delete("/:id", function (req, res) {
    burgers.destroy({
        where: {
            id: req.params.id
        }
    }).then(function () {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;