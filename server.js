// Dependencies
var express = require("express");
var bodyParser = require("body-parser");

// Database set up and server routing
var routes = require("./controllers/routes.js");
var db = require("./controllers/connection.js");

// Setting port
const port = process.env.PORT || 8080;

// Start express
var app = express();

// express app configuration
app.use(bodyParser.urlencoded({
	extended: false
}));
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(routes);

// Confirm DB connection
db.once("open", function(){
    console.log("Database Connected!");
});

// Start the server and listen for requests
app.listen(port, function(){
    console.log("Get Studyin', punk: Port ", port);
});