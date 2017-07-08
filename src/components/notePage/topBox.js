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
                                <div className="col s4 m3">
                                    <img id="relation-img" className="responsive-img circle" src={this.state.image_url}
                                        alt="" />
                                </div>
                                <div className="col s8 m5">
                                    <div className="input-field">
                                        <input id="topic_name" type="text" className="validate" onChange={this.handleTopic} value={this.state.topic} />
                                        <label htmlFor="topic_name">Topic Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="subtopic_name" type="text" className="validate" onChange={this.handleSubTopic} value={this.state.subtopic} />
                                        <label htmlFor="subtopic_name">Subtopic Name</label>
                                    </div>
                                </div>
                                <div className="col s12 m4">
                                    <div className="input-field">
                                        <input id="name" type="text" className="validate" />
                                        <label htmlFor="name">Name</label>
                                    </div>
                                    <div className="input-field">
                                        <input id="month" type="text" className="validate" />
                                        <label htmlFor="month">Month</label>
                                    </div>
                                    <div className="row">

                                        <div className="input-field col s10 input-box">
                                            <input id="class" type="text" className="validate" />
                                            <label htmlFor="class">Class</label>
                                        </div>
                                        <div className="input-field col s2 input-box" id="test">
                                            <input id="A" type="text" className="validate" />
                                            <label htmlFor="A">A</label>
                                        </div>
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
