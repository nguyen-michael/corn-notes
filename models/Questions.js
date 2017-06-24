// import mongoose, {Schema, model} from 'mongoose';

var mongoose = require("mongoose");
var Schema = mongoose.Schema

const QuestionSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    questionType:{
        type: String,
        required: [true, "No Question Type Specified."]
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