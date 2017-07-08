import React, { Component } from "react";

class InputBox extends Component {
    constructor(props) {
        // boxes will need to connect to the DB
        super(props);

        this.state = {
            type: this.props.title,
            questionId: this.props.id
        }

        this.handleChange = this.handleChange.bind(this);

    }
    handleChange(event) {
        this.props.updateQuestion(this.state.questionId, this.state.type, event.target.value);
    }


    render() {
        return (

            <div className="input-field z-depth-1">
                <textarea placeholder=" " id="elaboration" className="materialize-textarea" onChange={this.handleChange} >{this.props.text}</textarea>
                <label htmlFor="elaboration" className="active">{this.props.title}</label>
            </div>
        );
    }
}

export default InputBox;
