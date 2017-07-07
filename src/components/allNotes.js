import React, { Component } from "react";
import SlideNav from './common/slideNav';
import ScrollsSpy from './common/scrollSpy';
import NoteCard from './allNotes/noteCard.js';
import Footer from './common/footer'
import API from '../utils/api';
// Added Note page to test
import NotePage from './NotePage';

class AllNotes extends Component {
    constructor(props) {
        // need to create db pulls for all, recent, favorites
        super(props);
        this.state = {
            scrollSpyElements: [{ id: "recent-box", name: "Recent Notes" }, { id: "favorite-box", name: "Favorite Notes" }, { id: "all-box", name: "All Notes" }],
            userId: 1,
            selected: false

        };
        this.login = this.login.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
        this.getUniqueAuthId = this.getUniqueAuthId.bind(this);
    }
    // AUTH: Getting Unique ID
    getUniqueAuthId() {
        API.getUniqueAuthId(localStorage.getItem("access_token")).then(response => {
            console.log(response);
        });
    }

    //method to add a note to this user
    addNewNote() {
        API.createNewNote(this.state.userId).then(data => {
            console.log(data);
        });
    }

    selectNote() {
        console.log("Hello");
    }

    // Method for log in button
    login() {
        this.props.auth.login();
    }

    //method to populate to the ntoecard not attached
    renderRecentNoteCards() {
        return this.state.boxes.map(box => (
            <div >
                <NoteCard

                />
            </div>
        ));
    }

    renderAllNoteCards() {
        return this.state.boxes.map(box => (
            <div >
                <NoteCard

                />
            </div>
        ));
    }

    renderFavNoteCards() {
        return this.state.boxes.map(box => (
            <div >
                <NoteCard

                />
            </div>
        ));
    }


    render() {
        const { isAuthenticated } = this.props.auth;
        const { noteSelected } = this.state.selected;
        if (!isAuthenticated()) {
            return (
                <div>
                    <h1>Access Denied; please log in</h1>
                    <button
                        className="btn btn-default"
                        onClick={this.login}
                    >
                        Log In
                    </button>
                </div>
            );
        } else  if (isAuthenticated() && noteSelected) {
            return (
                <NotePage note={this.state.note} />
            )
        }
         else  {
            //  Adding test for localStorage retrival
            // var accessToken = localStorage.getItem("access_token");
            // console.log("Local Storage Access Token: ", localStorage.getItem("access_token"));
            // Running Method to test. Perhaps a good idea to refactor so that it will render ONLY after receiving the unique ID... Then ONLY AFTER receviing a user object.
            this.getUniqueAuthId();

            return (
                <div>
                    <div className='container'>
                        <a className="btn-floating btn-large waves-effect waves-light red right" onClick={this.addNewNote}>
                            <i className=" material-icons">note_add</i></a>
                        <SlideNav />
                        <div className="section scrollspy" id="recent-box">
                            <div className="align-center">
                                <h2>Recent Notes</h2>
                            </div>
                            <hr />
                            <div className="row">
                                <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            </div>


                        </div>
                        <div className="section scrollspy" id="favorite-box">
                            <div className="align-center">
                                <h2>Favorite Notes</h2>
                            </div>
                            <hr />
                            <div className="row">
                                <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />

                            </div>

                        </div>
                        <div className="section scrollspy" id="all-box">
                            <div className="align-center">
                                <h2>All Notes</h2>
                                <hr />
                            </div>

                            <div className="row">
                                <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            </div>


                        </div>

                    </div>
                    <ScrollsSpy listElements={this.state.scrollSpyElements} />
                    <Footer />
                </div>
            );
        }
        
    }
}

export default AllNotes;