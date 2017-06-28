import React, {Component} from "react";


// Testing component, take away or reuse or whater.
class QABox extends Component {
    constructor(props) {
        // Passes any props to the superclass, the constructor that generates this Main class. 
        super(props);
    }

    render() {
        return (
              <div className="row" id="elaboration-box">
                    <form className="col s12 z-depth-2">
                        <div className="row center-align">
                            <h5>{this.props.boxName}
                                <a className="btn-floating btn-large waves-effect waves-light red right ">
                                    <i className=" material-icons">note_add</i></a>
                            </h5>
                            <hr/>
                        </div>
                        <div className="row center-align">
                            <div className="col s5">
                                {/*{component for question}*/}
                                <div className="input-field z-depth-1">
                                    <textarea id="elaboration-q1" className="materialize-textarea"></textarea>
                                    <label htmlFor="elaboration-z1">Question 1</label>
                                </div>
                                <div className="input-field z-depth-1">
                                    <textarea id="elaboration-z2" className="materialize-textarea"></textarea>
                                    <label htmlFor="elaboration-z2">Question 2</label>
                                </div>
                            </div>
                            <div className="col s7">
                                {/*component for answer*/}
                                <div className="input-field z-depth-1">
                                    <textarea id="elaboration-x1" className="materialize-textarea"></textarea>
                                    <label htmlFor="elaboration-x1">Answer 1</label>
                                </div>
                                <div className="input-field z-depth-1">
                                    <textarea id="elaboration-x2" className="materialize-textarea"></textarea>
                                    <label htmlFor="elaboration-x2">Answer 2</label>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
        );
    }
}

module.exports = QABox;