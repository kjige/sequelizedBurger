var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

var db = require("./models");

var app = express();

var PORT = process.env.NODE_ENV || 3000;

db.sequelize.sync().then(function () {
    app.listen(PORT, function () {
        console.log("Listening on port %s", PORT);
    });
});

app.use(express.static(process.cwd() + "/public"));

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(methodOverride("_method"));

// set handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));

app.set("view engine", "handlebars");

app.use("/", routes);

require('./controllers/burger_controller.js')(app);