// import NotesPage from "./NotesPage.js";
// import Questions from "./Questions.js";

var NotesPage = require("./NotesPage.js");
var Questions = require("./Questions.js");

// Hard Coded Test Data
// Elaboration, Distinction, Relation, Example

Questions.create({
    questionType: "Poopity Poop",
    questionText: "Who is your Daddy and What Does he do?",
    answer: "Mah doody poo!"
}, function (err, doc) {
    if (err) throw err;
});

Questions.create({
    questionType: "Requec Poop",
    questionText: "Where?@ Are the dogs when you need them?",
    answer: "Mah Hellow Workd."
}, function (err, doc) {
    if (err) {
        console.log(err)
    };
});

NotesPage.create({
    topic: "Fooby",
    subtopic: "Hellow",
    summary: "",
    
});

// DB TEST
var Notes = require("../models/NotesPage.js");
var Question = require("../models/Questions.js");

// Init first question and first notes page
router.get("/db/test", function (req, res) {

    var newQuestion = new Question({
        questionType: "Requec Poop",
        questionText: "Where?@ Are the dogs when you need them?",
        answer: "Mah Hellow Workd."
    });

    newQuestion.save(function (err, qDoc) {
        if (err) {
            console.log(err);
        } else {
            var newNote = new Notes({
                topic: "Hello",
                image_url: "hello.jpg",
                summary: "Cat",
                questions: [qDoc._id]
            });
            newNote.save(function (err, noteDoc) {
                if (err) {
                    console.log(err);
                } else {
                    res.end();
                }
            });
        }
    });

    res.end();
});

// Find and update with new question
router.get("/db/fnu", function (req, res) {
    var newQuestion = new Question({
        questionType: "RAranfp",
        questionText: "Decisor?",
        answer: "BafdsMah Helafealow AerWaeafaeforkd."
    });

    newQuestion.save(function (err, doc) {
        if (err) {
            console.log(err);
        } else {
            Notes.findOneAndUpdate({},
                { $push: { "questions": doc._id } },
                { new: true },
                function (err, newDoc) {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(newDoc);
                    }
                });
        }
    }
    );
});

// Query and Return.
router.get("/db/qnr", function (req, res) {
    Notes.findOne({}).
    populate("questions").
    exec(function (err, note) {
        if (err) { 
            console.log(err);
        } else {
            res.json(note);
        }
    });
});

// /DB TEST
