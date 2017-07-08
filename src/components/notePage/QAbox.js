import React, { Component } from "react";
import InputBox from './inputBox';
import API from '../../utils/api';

// add component for input fields
// have a button add a new input field

class QABox extends Component {
    constructor(props) {
        // boxes will need to connect to the DB
        super(props);

        this.state = {
            questions: this.props.data,
            edit: false
        }

        this.addQuestion = this.addQuestion.bind(this);
        this.updateQuestionCall = this.updateQuestionCall.bind(this);
        this.updateQuestionState = this.updateQuestionState.bind(this);
        this.editMode = this.editMode.bind(this);
        this.deleteQuestion = this.deleteQuestion.bind(this);

    }

    addQuestion() {

        API.newQuestion(this.props.boxName).then(newQuest => {
            let id = {
                questionId: newQuest.data["_id"],
                noteId: this.props.noteId
            }

            API.attachQuestionToNote(id);

            let updateQuestions = this.state.questions;
            let newQuestion = { _id: id.questionId, questionText: "", answer: "" }
            updateQuestions.push(newQuestion);
            this.setState({ questions: updateQuestions })

        });
    }

    editMode() {
        let updatedEdit = !this.state.edit;
        this.setState({ edit: updatedEdit });
    }

    //handles api for question updates
    updateQuestionCall(question) {
        API.updateQuestion(question);
        console.log("API CALL FOR", question)
    }
    //handles when child element updates the question, then sends to API for update

    updateQuestionState(id, type, change) {

        let updatedQuestionArr = this.state.questions.filter(function (el) {
            return (el._id == id);
        });

        let updatedQuestion = updatedQuestionArr[0]

        if (type == "Question") {
            updatedQuestion.questionText = change;

        } else {
            updatedQuestion.answer = change;
        }
        this.updateQuestionCall(updatedQuestion);
    }

    deleteQuestion(e, id) {
        e.preventDefault();
        console.log("click, delete question, qid: ", id, "noteID: ", this.props.noteId);
        console.log("question state before", this.state.questions);
        API.removeQuestionFromNotes({ "questionId": id, "noteId": this.props.noteId })
            .then(response => {
                API.findNote(this.props.noteId)
                    .then(response => {
                        console.log("Note After Deletion of Question: ", response.data.questions);
                        // Questions array: Response.data.questions
                        this.setState({ questions: response.data.questions });
                        console.log("question state after", this.state.questions);
                    });
            });
    }

    renderInputFields() {

        //if edit mode is enabled
        if (this.state.edit) {
            return this.props.data.map(question => (
                <div className="row center-align">
                    <div className="col s5">
                        <InputBox title={"Question"} updateQuestion={this.updateQuestionState} id={question["_id"]} text={question.questionText} />
                    </div>
                    <div className="col s5">
                        <InputBox title={"Answer"} updateQuestion={this.updateQuestionState} id={question["_id"]} text={question.answer} />
                    </div>
                    <div className="col s2">
                        <a className="btn-floating btn-large waves-effect waves-light red" onClick={(e) => this.deleteQuestion(e, question._id)}>
                        {/*<a className="btn-floating btn-large waves-effect waves-light red" onClick={this.deleteQuestion(question._id)}>*/}
                            <i className=" material-icons">delete</i></a>
                    </div>
                </div>
            ));
        }

        else {
            return this.props.data.map(question => (
                <div className="row center-align">
                    <div className="col s5">
                        <InputBox title={"Question"} updateQuestion={this.updateQuestionState} id={question["_id"]} text={question.questionText} />
                    </div>
                    <div className="col s7">
                        <InputBox title={"Answer"} updateQuestion={this.updateQuestionState} id={question["_id"]} text={question.answer} />
                    </div>
                </div>
            ));
        }
    }

    render() {
        return (
            <div className="row" id="elaboration-box" >
                <form className="col s12 z-depth-2" style={styles.bigBox}>
                    <div className="row center-align">
                        <h5>{this.props.boxName}
                            {/* Add Question Button */}
                            <a className="btn-floating btn-large waves-effect waves-light cyan right" onClick={this.addQuestion}>
                                <i className=" material-icons">note_add</i></a>
                                {/* Edit mode Button */}
                            <a className="btn-floating btn-large waves-effect waves-light red left" onClick={this.editMode}>
                                <i className=" material-icons">delete</i></a>
                        </h5>
                        <hr />
                    </div>
                    {this.renderInputFields()}
                </form>
            </div>
        );
    }
}
const styles = {
    bigBox: {
        backgroundColor: "white"
    }
};


export default QABox;
