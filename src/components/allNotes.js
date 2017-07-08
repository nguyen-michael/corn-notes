import React, { Component } from "react";
import SlideNav from './common/slideNav';
import ScrollsSpy from './common/scrollSpy';
import NoteCard from './allNotes/noteCard.js';
import Footer from './common/footer';
import NotePage from './NotePage';
import API from '../utils/api';

class AllNotes extends Component {
    constructor(props) {
        // need to create db pulls for all, recent, favorites
        super(props);
        this.state = {
            scrollSpyElements: [{ id: "recent-box", name: "Recent Notes" }, { id: "favorite-box", name: "Favorite Notes" }, { id: "all-box", name: "All Notes" }],
            userId: 1,
            selected: false,

            notesArray: [],

            noteSelected: ""


        };
        this.login = this.login.bind(this);
        this.addNewNote = this.addNewNote.bind(this);
        this.handleUserLogin = this.handleUserLogin.bind(this);
        this.renderNotes = this.renderNotes.bind(this);
        this.selectNote = this.selectNote.bind(this);
        this.renderNotePage = this.renderNotePage.bind(this);    
      
    }

    // Get all of the Info before rendering... if authenticated...
    componentWillMount() {
        const { isAuthenticated } = this.props.auth;
        if (isAuthenticated()) {
            this.handleUserLogin();
        }
    }

    // When the component Changes, in this case, via state changes in handleUserLogin()...
    // componentDidUpdate() {
    //     console.log("comp did update hit");
    //     this.renderNotes();
    // }

    // AUTH: Getting Unique ID
    handleUserLogin() {
        API.getUniqueAuthId(localStorage.getItem("access_token"))
            .then(response => {
                // Response.data.sub gets the Auth0 ID
                const authID = response.data.sub;
                console.log("Unique per User Auth0 ID: ", authID);
                API.findOrCreateUser(authID)
                    .then(response => {
                        // After receiving the AuthID, find or create the User.
                        const userID = response.data._id;
                        console.log("Getting User DB ID: ", response.data._id);
                        API.getFullUser(userID)
                            .then(response => {
                                const notesArray = response.data.notePages;
                                console.log("Full user's NotesPages: ", notesArray);
                                this.setState({ notesArray: notesArray });
                            });
                    });
            });
    }

    // Render Notes, fallback to Message if Empty 
    renderNotes() {
        console.log("Render Notes Hit");
        if (this.state.notesArray.length == 0) {
            return (
                <div>
                    <p>No notes, friend.</p>
                </div>
            );
        } else {
            return this.state.notesArray.map(note => (
                <NoteCard
                    key={note._id}
                    header={note.topic}
                    summary={note.summary}
                    subheader={note.subtopic}
                    cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"}
                />
            ));
        }
    }

    //method to add a note to this user
    addNewNote() {
        API.createNewNote(this.state.userId).then(data => {
            console.log("new note returns", data);
        });
    }

    //handle the note that was selected
    selectNote(id) {
        API.findNote(id).then(note => {
            this.setState({
                selected: true,
                noteSelected: note.data
            });
        });
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


    // after a note is selected this will render the notepage for that note
    renderNotePage() {

        return (
            <NotePage note={this.state.noteSelected} auth={this.props.auth} />
        )
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
        const noteSelected = this.state.selected;

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
        } else if (isAuthenticated() && noteSelected) {
            return (
                <div>
                    {this.renderNotePage()}
                </div>
            )
        }
        else {
            //  Adding test for localStorage retrival
            // var accessToken = localStorage.getItem("access_token");
            // console.log("Local Storage Access Token: ", localStorage.getItem("access_token"));
            // Running Method to test. Perhaps a good idea to refactor so that it will render ONLY after receiving the unique ID... Then ONLY AFTER receviing a user object.
            // this.handleUserLogin();
            // Moving this to "componentWillMount"

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
                            {/* We're gonna do test Rendering Here!*/}
                            <div className="row">
                                {this.renderNotes()}
                            </div>

                        </div>
                        <div className="section scrollspy" id="favorite-box">
                            <div className="align-center">
                                <h2>Favorite Notes</h2>
                            </div>
                            <hr />
                            <div className="row">

                            </div>

                        </div>
                        <div className="section scrollspy" id="all-box">
                            <div className="align-center">
                                <h2>All Notes</h2>
                                <hr />
                            </div>

                            <div className="row">
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