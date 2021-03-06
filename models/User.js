// import mongoose, {Schema, model} from 'mongoose';
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var findOrCreate = require("mongoose-find-or-create");

const UserSchema = new Schema({
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    authID: {
        type: String,
        required: [true, "Auth0 ID pass-in error"]
    },
    // Questions to populate the query as needed.
    notePages: [{
        type: Schema.Types.ObjectId,
        ref: "NotesPage"
    }]
});

// Adding in find or create functionality
UserSchema.plugin(findOrCreate);

var User = mongoose.model("User", UserSchema);

// export default User;
module.exports = User;