// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var React = require('react');
var Router = require('react-router');
var ReactDOMServer = require('react-dom/server');
var path = require('path');


// Database set up and server routing
var routes = require("./controllers/routes.js");
var db = require("./controllers/connection.js");

//react Routes for html
// var reactRoutes = require('./app/react-routes.js')

// Setting port
const port = process.env.PORT || 8080;

// Start express
var app = express();

// express app configuration
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "/build")));
app.use(routes);


// for react-routes
// app.use(function(req, res, next) {
//   var router = Router.create({location: req.url, routes: reactRoutes})
//   router.run(function(Handler, state) {
//     var html = ReactDOMServer.renderToString(element) 
//     return res.render('react_page', {html: html})
//   })
// })

// Get Heroku Config Variables to deploy to front end
// This seems like a big security hole, buut....
app.get("/heroku-config-var.js", function(req, res) {
    res.send(`const AUTH = {domain:${process.env.AUTH0_DOMAIN}, clientID:${process.env.AUTH0_CLIENT_ID}, redirectUri:${process.env.AUTH0_CALLBACK_URL};`);
});

// Confirm DB connection
db.once("open", function () {
    console.log("Database Connected!");
});

// Start the server and listen for requests
app.listen(port, function () {
    console.log("Get Studyin', punk: Port ", port);
});