/*
    MNN: Proposing a schema for data flow from students and teachers back and forth.
    Inspired by RESTful APIS, probably returning BSON using MONGO as a backend.
    This way the Teacher, when logged in can get updates on what the students are writing or to view their notes etc.
    
*/

var notesPage = {
    // Database info
    _id: this._id,
    createdAt: Date,
    updatedAt: Date,

    // Administrative info at the top of the Notes Page
    // student: student._id, 
    // Perhaps connect to student here, Get Student info from here. Alternatively, students should include notes, not vice versa, we should have this already.
    topic: '',
    subtopic: '',
    image_url: '',

    // Content
    questions: [question._id], // Array of ID of questions. 
    summary: '',
    externalAssets: ['']
};

var question = {
    // Database info
    _id: this._id,
    createdAt: Date,
    updatedAt: Date,

    // Administrative content
    type: '', // The Cornell Types of questions. Limited to a finite set of options. allows us to put into the slots they belong in.

    // Content
    question: '',
    answer: ''
}

var user = {
    // Database info
    _id: this._id,
    createdAt: Date,
    updatedAt: Date,

    // Authentication info

    // Content
    name: '',
    type: '' // Student, Teacher, Admin, etc. Again, just a set amount.

    // Insert other content in here, age, grade, medical records? Etc?
    
    // Profile for user to link user with their students and class or as student; link them with their notes
}