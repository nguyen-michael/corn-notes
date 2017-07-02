import React, { Component } from "react";
import SlideNav from './common/slideNav';
import ScrollsSpy from './common/scrollSpy';
import NoteCard from './allNotes/noteCard.js';
import Footer from './common/footer'


class AllNotes extends Component {
    constructor(props) {
        // need to create db pulls for all, recent, favorites
        super(props);
        this.state = {
            scrollSpyElements: [{id:"recent-box",name:"Recent Notes"}, {id:"favorite-box",name:"Favorite Notes"},{id:"all-box",name:"All Notes"}]
        };

    }

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
        return (
            <div>
                <div className='container'>
                    <SlideNav />
                    <div className="section scrollspy" id="recent-box">
                        <div className="align-center">
                            <h2>Recent Notes</h2>
                        </div>
                        <hr />
                        <div className="row">
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
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
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
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
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />
                            <NoteCard header={"Header"} summary={"Something witty and well written for this spot"} subheader={"SubHeader"} cardImage={"https://cdn-images-1.medium.com/max/1600/1*mwczhqPN-RbSEXPv-ChhWg.jpeg"} />

                        </div>


                    </div>

                </div>
                <ScrollsSpy listElements={this.state.scrollSpyElements}/>
                <Footer />
            </div>
        );
    }
}

export default AllNotes;