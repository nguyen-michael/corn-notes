import React, { Component } from "react";
import SlideNav from './common/slideNav';
import TopBox from './notePage/topBox';
import QAbox from './notePage/QAbox';
import BottomBox from './notePage/bottomBox';
import ScrollsSpy from './common/scrollSpy';
import API from '../utils/api';


class NotePage extends Component {
    constructor(props) {
        // boxes will need to connect to the DB
        super(props);

        // Filters for each type of question to be sent to QA box property, which handles questions
        let elaborationQuestions = this.props.note.questions.filter(function (el) {
            return (el.questionType === "Elaboration");
        });

        let distinctionQuestions = this.props.note.questions.filter(function (el) {
            return (el.questionType === "Distinction");
        });

        let relationQuestions = this.props.note.questions.filter(function (el) {
            return (el.questionType === "Relation");
        });

        let exampleQuestions = this.props.note.questions.filter(function (el) {
            return (el.questionType === "Example");
        });



        this.state = {
            note: {
                _id: this.props.note._id,
                topic: this.props.note.topic,
                subtopic: this.props.note.subtopic,
                image_url: this.props.note.image_url,
                summary: this.props.note.summary
            },

            boxes: [
                {
                    type: "Elaboration",
                    questions: elaborationQuestions,
                    noteId: this.props.note._id
                },
                {
                    type: "Distinction",
                    questions: distinctionQuestions,
                    noteId: this.props.note._id
                },
                {
                    type: "Relation",
                    questions: relationQuestions,
                    noteId: this.props.note._id
                },
                {
                    type: "Example",
                    questions: exampleQuestions,
                    noteId: this.props.note._id
                },
            ],


            scrollSpyElements: [{ id: "top-box", name: "Title" }, { id: "Elaboration", name: "Elaboration" },
            { id: "Distinction", name: "Distinction" }, { id: "Relation", name: "Relation" }
                , { id: "Example", name: "Example" }, { id: "bottom-box", name: "Summary" }]

        };


        this.login = this.login.bind(this);
        this.renderQAbox = this.renderQAbox.bind(this);
        this.updateTop = this.updateTop.bind(this);
        this.updateBottom = this.updateBottom.bind(this);
        this.updateNote = this.updateNote.bind(this);
    }

    // Method for log in button
    login() {
        this.props.auth.login();
    }

    //handles when bottom box elements are updated
    updateBottom(summary) {

        let updatedNote = this.state.note;
        updatedNote.summary = summary;
        this.setState({ note: updatedNote })
    }

    //handles when topbox elements are updated
    updateTop(newTop) {
        let updatedNote = this.state.note;
        updatedNote.subtopic = newTop.subtopic;
        updatedNote.topic = newTop.topic;
        this.setState({ note: updatedNote })
    }


    //sends put call to api
    updateNote() {
       
        API.updateNote(this.state.note);
    }

    // renders each box with props
    renderQAbox() {

        return this.state.boxes.map(box => (
            <div className="section scrollspy" id={box.type}>
                <QAbox
                    boxName={box.type}
                    key={box.type}
                    data={box.questions}
                    noteId={box.noteId}
                />
            </div>
        ));
    }

    render() {
        // This is neat: it works and checks benodcause Render is called every 'cycle'
        const { isAuthenticated } = this.props.auth;
        // Conditional Rendering: Login Button if user not logged in
        // Otherwise app is shown.
        if (!isAuthenticated()) {
            return (
                <div>
                    <h1>Access Denied; please log in</h1>
                    <button
                        className="btn btn-default"
                        onClick={this.login}
                    >
                        Log In
                    </button>
                </div>
            );
        } else if (isAuthenticated()) {
            return (
                <div>
                    <div className='container'>
                        <SlideNav />
                        <div className="section scrollspy" id="top-box">
                            <TopBox note={this.state.note} updateTop={this.updateTop} />
                        </div>
                        <hr />
                        {this.renderQAbox()}
                        <hr />
                        <div className="section scrollspy" id="bottom-box">
                            <BottomBox summary={this.state.note.summary} updateNote={this.updateNote} image_url={this.state.note.image_url} updateBottom={this.updateBottom} />
                        </div>
                        <hr />
                    </div>
                    <ScrollsSpy listElements={this.state.scrollSpyElements} />
                </div>
            );
        };
    }
}

export default NotePage;
