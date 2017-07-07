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
    }

    // Method for log in button
    login() {
        this.props.auth.login();
    }

    // componentWillMount() {
    //     API.findNote("595ee9c6fc1e95445bdaf2d1").then(note => {
    //         console.log(note.data)
    //         this.setState({ note: note.data })
    //     });
    // }
    //should test to make sure all 4 elements are present, if not, add them
    renderQAbox() {

        console.log("boxes are", this.state.boxes)
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
                            <TopBox />
                        </div>
                        <hr />
                        {this.renderQAbox()}
                        <hr />
                        <div className="section scrollspy" id="bottom-box">
                            <BottomBox />
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
