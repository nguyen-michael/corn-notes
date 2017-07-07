import React, { Component } from "react";
import SlideNav from './common/slideNav';
import TopBox from './notePage/topBox';
import QAbox from './notePage/QAbox';
import BottomBox from './notePage/bottomBox';
import ScrollsSpy from './common/scrollSpy';


class NotePage extends Component {
    constructor(props) {
        // boxes will need to connect to the DB
        super(props);
        this.state = {
            boxes: [

                {
                    type: "Elaboration",
                    questions:
                    [{ question: "Is anyone there?", answer: "No" },
                    { question: "Can you even react brah?", answer: "No" }]
                },
                {
                    type: "Distinction",
                    questions:
                    [{ question: "Distinct?", answer: "No" },
                    { question: "Can you even react brah?", answer: "No" }]
                },
                {
                    type: "Relation",
                    questions:
                    [{ question: "relation?", answer: "No" },
                    { question: "Can you even react brah?", answer: "No" }]
                },
                {
                    type: "Example",
                    questions:
                    [{ question: "Example?", answer: "No" },
                    { question: "Can you even react brah?", answer: "No" }]
                },
            ],
            scrollSpyElements: [{ id: "top-box", name: "Title" }, { id: "Elaboration", name: "Elaboration" },
            { id: "Distinction", name: "Distinction" }, { id: "Relation", name: "Relation" }
                , { id: "Example", name: "Example" }, { id: "bottom-box", name: "Summary" }]

        };

        this.login = this.login.bind(this);
        // this.addText = this.addText.bind(this);
    }

    // Method for log in button
    login() {
        this.props.auth.login();
    }

    addText() {

    }

    renderQAbox() {
        return this.state.boxes.map(box => (
            <div className="section scrollspy" id={box.type}>
                <QAbox
                    boxName={box.type}
                    key={box.type}
                    data={box.questions}
                />
            </div>
        ));
    }

    render() {
        // This is neat: it works and checks because Render is called every 'cycle'
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
