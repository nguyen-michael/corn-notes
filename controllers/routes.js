// Dependencies
var express = require("express");
var router = express.Router();
var path = require("path");

// GET , Notes by ID. id will arrive as string, Mongoose.types.ObjectId(str) will convert to proper ID
router.get("", function () { });

router.get("", function () { });

router.get("", function () { });

router.get("", function () { });

// Serve Index on any route, SPA.
router.get("*", function (req, res) {
    res.sendFile(path.resolve("./public/index.html"));
});

module.exports = router;