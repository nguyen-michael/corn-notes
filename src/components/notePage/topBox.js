import React, { Component } from "react";

class TopBox extends Component {
    constructor(props) {

        super(props);

        this.state = {

            image_url: this.props.note.image_url,
            topic: this.props.note.topic,
            subtopic: this.props.note.subtopic,

        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubTopic = this.handleSubTopic.bind(this);
        this.handleTopic = this.handleTopic.bind(this);
    }

//changes state of topic as user types, calls parents change handler
    handleTopic(event) {
        this.setState({ topic: event.target.value });
        this.handleChange();
    }

//changes state of subtopic as user types, calls parents change handler
    handleSubTopic(event) {
        this.setState({ subtopic: event.target.value })
        this.handleChange();
    }

    handleChange() {
        let updatedNote = {
            topic: this.state.topic,
            subtopic: this.state.subtopic
        }

        this.props.updateTop(updatedNote);
    }

    render() {
        return (
            <div className="row">
                <div className="col s12 z-depth-2" style={styles.bigBox}>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="col s4 m4">
                                    <img id="relation-img" className="responsive-img" src={this.state.image_url}
                                        alt="" />
                                </div>
                                <div className="col s8 m5">
                                    <div className="input-field">
                                        <input id="topic_name" type="text" className="validate" onChange={this.handleTopic} value={this.state.topic} />
                                        <label htmlFor="topic_name" className="active">Topic Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="subtopic_name" type="text" className="validate" onChange={this.handleSubTopic} value={this.state.subtopic} />
                                        <label htmlFor="subtopic_name" className="active">Subtopic Name</label>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>


        );
    }
}

const styles = {
    bigBox: {
        backgroundColor: "white"
    }
};

export default TopBox;
