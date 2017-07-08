import React, { Component } from "react";

class BottomBox extends Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.updateBottom(event.target.value);
    }

    render() {
        return (

            <div className="col s12 z-depth-2" style={styles.bigBox}>

                <div className="row">
                    <div className="col s3">
                        <img id="relation-img" className="responsive-img" style={styles.bottomImage} src={this.props.image_url} alt="" />
                    </div>
                    <div className="col s5">
                        <div className="input-box z-depth-2">
                            <div className="input-field">
                                <textarea id="summary" className="materialize-textarea" onChange={this.handleChange} >{this.props.summary}</textarea>
                                <label htmlFor="summary">Summary</label>
                            </div>
                        </div>
                    </div>
                    <div className="col s4">
                        <div className="row center-align" style={styles.submitButton} ><a className="waves-effect waves-light btn " onClick={this.props.updateNote}>Save</a></div>
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
    },

    bottomImage: {
        maxHeight: "250px",
        maxWidth: "250px"

    }
};

export default BottomBox;
