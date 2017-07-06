import React, { Component } from "react";

class InputBox extends Component {
    constructor(props) {
        // boxes will need to connect to the DB
        super(props);
      
    }

    render() {
        return (

            <div className="input-field z-depth-1">
                <textarea id="elaboration" className="materialize-textarea">{this.props.text}</textarea>
                <label htmlFor="elaboration">{this.props.title}</label>
            </div>
        );
    }
}

export default InputBox;
