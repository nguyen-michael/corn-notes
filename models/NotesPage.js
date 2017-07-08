// import mongoose, {Schema, model} from 'mongoose';

var mongoose = require("mongoose");
var Schema = mongoose.Schema

const NotesPageSchema = new Schema({
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
        default: "/default-img.jpeg"
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