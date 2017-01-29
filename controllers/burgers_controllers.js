var express = require("express");

var router = express.Router();

// Import the model (burgers.js) to use its database functions.
var burgers = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burgers.all(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/", function (req, res) {
    burgers.create([
        "name", "eaten"
    ], [
        req.body.name, req.body.eaten
    ], function () {
        res.redirect("/");
    });
});

router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.update({
        eaten: req.body.eaten
    }, condition, function () {
        res.redirect("/");
    });
});

router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burgers.delete(condition, function () {
        res.redirect("/");
    });
});

// Export routes for server.js to use.
module.exports = router;