import React, {Component} from "react";
import InputBox from './inputBox';
// add component for input fields
// have a button add a new input field

class QABox extends Component {
constructor(props) {
        // boxes will need to connect to the DB
        super(props);
        this.state = {
            questions: [{question:"Is anyone there?",answer:"No"},{question:"Can you even react brah?", answer:"No"}]
        };

    
    }

renderInputFields() {
        return this.state.questions.map(question => (
              <div className="row center-align">
                            <div className="col s5">
                                <InputBox title={"Question"} text={question.question}/>
                            </div>
                            <div className="col s7">
                                <InputBox title={"Answer"} text={question.answer}/>
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
                                <a className="btn-floating btn-large waves-effect waves-light red right ">
                                    <i className=" material-icons">note_add</i></a>
                            </h5>
                            <hr/>
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
