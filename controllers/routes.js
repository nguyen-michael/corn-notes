// Dependencies
var express = require("express");
var router = express.Router();
var path = require("path");

// Serve Index on any route, SPA.
router.get("*", function (req, res) {
    res.sendFile(path.resolve("index.html"));
});

module.exports = router;