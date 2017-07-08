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
            questions: this.props.data
        }

        this.addQuestion = this.addQuestion.bind(this);
        this.updateQuestionCall = this.updateQuestionCall.bind(this);
        this.updateQuestionState = this.updateQuestionState.bind(this);
        
    }

    addQuestion() {

        API.newQuestion(this.props.boxName).then(newQuest => {
            let id = {
                questionId: newQuest.data["_id"],
                noteId: this.props.noteId
            }
            console.log("this question id is", id)
            API.attachQuestionToNote(id);

        });
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

    renderInputFields() {
        console.log(this.props.data);
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

    render() {
        return (
            <div className="row" id="elaboration-box" >
                <form className="col s12 z-depth-2" style={styles.bigBox}>
                    <div className="row center-align">
                        <h5>{this.props.boxName}
                            <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.addQuestion}>
                                <i className=" material-icons">note_add</i></a>
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
