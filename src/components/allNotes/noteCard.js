import React, { Component } from "react";


class NoteCard extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
            noteId: props.noteId
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick() {
        this.props.selectNote(this.state.noteId);
        // console.log("click", this.state.noteId)
    }

    render() {
      
        return (
            <div className="col s6 m3 noteCard" onClick={this.handleClick}>

                <div className="card ">
                    <div className="card-image">
                        <img src={this.props.cardImage} />
                        <span className="card-title text-shadow">{this.props.header} - {this.props.subheader}</span>
                        <a className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">star</i></a>
 
                    </div>
                    <div className="card-content">
                        <p>{this.props.summary}</p>
                    </div>
               
                </div>
            </div>
        );
    };
}

export default NoteCard;

