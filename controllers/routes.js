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

// Creating a new note. Expects object as follows. All are optional and will default to empty string.
/*
req.body = {
	"topic": string,
	"subtopic": string,
    "image_url": string,
    "summary": string,
    "externalAssets": array of strings
}
*/
router.post("/api/new/note", function (req, res) {
    NotesPage.create(req.body, function (err, doc) {
        if (err) {
            console.log("New Note Error", err);
            res.send(err);
        } else {
            res.json(doc);
        }
    });
});

// Create new Question.
// Expects object as follows.
// All are optional and will default to empty string. questionType will default to elaboration.
/*
req.body = {
    "questionType": string,
    "questionText": string,
    "answer": string
           }
*/
router.post("/api/new/question", function (req, res) {
    Questions.create(req.body, function (err, doc) {
        if (err) {
            console.log("New Question Error", err);
            res.send(err);
        } else {
            res.json(doc);
        }
    });
});

// Update One Note by Id. (For adding questions, see other route)
/* Expects the following request body object. any field is optional except ID.
{
    "_id": string,
	"topic": string,
	"subtopic": string,
    "image_url": string,
    "summary": string,
    "externalAssets": array of strings
}
*/
router.put("/api/update/note", function (req, res) {
    NotesPage.findByIdAndUpdate(
        req.body._id, 
        {$set: req.body},
        function (err, doc) {
            if (err) {
                console.log("Update note error", err);
                res.send(err);
            } else {
                res.json(doc);
            }
        });
});




// Serve Index on any route, SPA.
router.get("*", function (req, res) {
    res.sendFile(path.resolve("./public/index.html"));
});

module.exports = router;