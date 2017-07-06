var mongoose = require("mongoose");
// Use native JS promise System
mongoose.Promise = Promise;

// Setting connection URI for local context and deployment
const connectURI = process.env.MONGODB_URI || "mongodb://localhost/cornnotes_local_dev";
mongoose.connect(connectURI, {
    useMongoClient: true
});

// Connect to the db
var db = mongoose.connection;

// Error handler
db.on("error", function (error) {
    console.log("Mongoose DB Error:", error);
});

// Export for use
module.exports = db;