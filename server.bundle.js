/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies
var express = __webpack_require__(2);
var bodyParser = __webpack_require__(7);

// Database set up and server routing
var routes = __webpack_require__(10);
var db = __webpack_require__(14);

// Setting port
var port = process.env.PORT || 8080;

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
db.once("open", function () {
    console.log("Database Connected!");
});

// Start the server and listen for requests
app.listen(port, function () {
    console.log("Get Studyin', punk: Port ", port);
});

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Dependencies
var express = __webpack_require__(2);
var router = express.Router();
var path = __webpack_require__(11);

// Database Models
var NotesPage = __webpack_require__(12);
var Questions = __webpack_require__(13);

// Getting a single note and also updating view of current note. Populates the note with associated questions
router.get("/api/note/:id", function (req, res) {
    NotesPage.findById(req.params.id).populate("questions").exec(function (err, doc) {
        if (err) {
            console.log("Notes Page Retrival Error", err);
            res.send(err);
        } else {
            res.json(doc);
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
    NotesPage.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, function (err, doc) {
        if (err) {
            console.log("Update note error", err);
            res.send(err);
        } else {
            res.json(doc);
        }
    });
});

// Update Question's fields. Expects the following request Body, all fields optional.
/*
req.body = {
    "_id": string,
    "questionType": string,
    "questionText": string,
    "answer": string
           }
*/
router.put("/api/update/question", function (req, res) {
    Questions.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, function (err, doc) {
        if (err) {
            console.log("Update question error", err);
            res.send(err);
        } else {
            res.json(doc);
        }
    });
});

// Add Question to Note. Requires an initialized note and a question to be created. Usually to be called after creating a question
/*
req.body = {
    noteId: string,
    questionId: string
} 
*/
router.put("/api/update/addQuestionToNote", function (req, res) {
    NotesPage.findByIdAndUpdate(req.body.noteId, { $push: { "questions": req.body.questionId } }, { new: true }, function (err, doc) {
        if (err) {
            console.log("Add question to note error", err);
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

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// import mongoose, {Schema, model} from 'mongoose';

var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var NotesPageSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    topic: {
        type: String,
        default: ""
    },
    subtopic: {
        type: String,
        default: ""
    },
    image_url: {
        type: String,
        default: ""
        // Can put a placeholder image here. 
    },
    summary: {
        type: String,
        default: ""
    },
    externalAssets: {
        type: [String],
        default: []
    },
    // Questions to populate the query as needed.
    questions: [{
        type: Schema.Types.ObjectId,
        ref: "Question"
    }]
});

var NotesPage = mongoose.model("NotesPage", NotesPageSchema);

// export default NotesPage;
module.exports = NotesPage;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    // Elaboration, Distinction, Relation, Example are valid question types. lower case.
    questionType: {
        type: String,
        required: [true, "No Question Type Specified."],
        default: "elaboration"
    },
    questionText: {
        type: String,
        minlength: [1, "Please enter a question."]
    },
    answer: {
        type: String,
        default: ""
    }
});

var Question = mongoose.model("Question", QuestionSchema);

// export default Question;

module.exports = Question;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var mongoose = __webpack_require__(1);
// Use native JS promise System
mongoose.Promise = Promise;

// Setting connection URI for local context and deployment
var connectURI = process.env.MONGODB_URI || "mongodb://localhost/cornnotes_local_dev";
mongoose.connect(connectURI);

// Connect to the db
var db = mongoose.connection;

// Error handler
db.on("error", function (error) {
    console.log("Mongoose DB Error:", error);
});

// Export for use
module.exports = db;

/***/ })
/******/ ]);