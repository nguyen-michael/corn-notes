import axios from "axios";

const API = {
    //method to create a new blank question - called via button in QA Box
    newQuestion: function (type) {
        return axios.post("/api/new/question", { "questionType": type });
    },

    //method to attach a newly created question to a note
    attachQuestionToNote: function (id) {
        return axios.put("/api/update/addQuestionToNote", { "noteId": id.noteId, "questionId": id.questionId });
    },

    //creates a new blank note for a user
    createNewNote: function () {
        return axios.post("/api/new/note");
    },

    //attaches the new note to a user 
    //***** not finished yet */
    attachNoteToUser: function (userID) {
        return axios.post("/api/update/addNoteToUser", { "userId": userID });
    },


    //updates to a note

    //get a note and it's questions
    findNote: function (noteId) {
        console.log(noteId)
        return axios.get("/api/note/" + noteId)
    }

};

export default API;
