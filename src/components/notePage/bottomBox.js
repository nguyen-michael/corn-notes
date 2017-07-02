import React, { Component } from "react";

class BottomBox extends Component {


    render() {
        return (

            <div className="col s12 z-depth-2" style={styles.bigBox}>

                <div className="row">
                    <div className="col s3">
                        <img id="relation-img" src="https://www.colourbox.com/preview/8299754-cute-corn-cartoon-character.jpg" alt="" />
                    </div>
                    <div className="col s5">
                        <div className="input-box z-depth-2">
                            <div className="input-field">
                                <textarea id="summary" className="materialize-textarea"></textarea>
                                <label htmlFor="summary">Summary</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="row center-align" style={styles.submitButton} ><a className="waves-effect waves-light btn ">Submit</a></div>
                        <div className="row center-align"><a className="waves-effect waves-light btn ">Download</a></div>
                    </div>
                </div>
            </div >
        );
    }
}
const styles = {
    bigBox: {
        backgroundColor: "white"
    },
    submitButton: {


        margin: '25px'
    }
};

export default BottomBox;
