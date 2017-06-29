// Dependencies
var express = require("express");
var router = express.Router();
var path = require("path");

// Database Models
var NotesPage = require("../Models/NotesPage.js");
var Questions = require("../Models/Questions.js");

// Getting a single note and also updating view of current note. Populates the note with associated questions
router.get("/api/note/:id", function (req, res) {
    NotesPage
        .findById(req.params.id)
        .populate("questions")
        .exec(function (err, doc) {
            if (err) {
                console.log("Notes Page Retrival Error", err);
                res.send(err);
            } else {
                res.json(doc)
            }
        });
});

router.get("", function () { });

router.get("", function () { });

router.get("", function () { });

// Serve Index on any route, SPA.
router.get("*", function (req, res) {
    res.sendFile(path.resolve("./public/index.html"));
});

module.exports = router;