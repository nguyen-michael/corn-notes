import mongoose, {Schema, model} from 'mongoose';

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
        default: ""
        // Can put a placeholder image here. 
    },
    summary: {
        type: String,
        default: ""
    },
    externalAssets: {
        type: [String]
    },
    // Questions to populate the query as needed.
    questions: [{
        type: Schema.Types.ObjectId,
        ref: "Question"
    }]
});

var NotesPage = model("NotesPage", NotesPageSchema);

export default NotesPage;