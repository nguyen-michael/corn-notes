// import NotesPage from "./NotesPage.js";
// import Questions from "./Questions.js";

var NotesPage = require("./NotesPage.js");
var Questions = require("./Questions.js");

// Hard Coded Test Data

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