import React, { Component } from "react";
import SlideNav from './notePage/slideNav';
import TopBox from './notePage/topBox';
import QAbox from './notePage/QAbox';
import BottomBox from './notePage/bottomBox';
import ScrollsSpy from './common/scrollSpy';


class NotePage extends Component {
    constructor(props) {
        // boxes will need to connect to the DB
        super(props);
        this.state = {
            boxes: ['Elaboration', 'Distinction', 'Relation', 'Example']
        };

    }

    renderQAbox() {
        return this.state.boxes.map(box => (
            <div className="section scrollspy" id={box}>
                <QAbox
                    boxName={box}
                    key={box}
                />
            </div>
        ));
    }

    render() {
        return (
            <div>
                <div className='container'>
                    <SlideNav />
                    <div className="section scrollspy" id="top-box">
                        <TopBox />
                    </div>
                    <hr />
                    {this.renderQAbox()}
                    <hr />
                    <div className="section scrollspy" id="bottom-box">
                        <BottomBox />
                    </div>
                    <hr />
                </div>
                <ScrollsSpy />
            </div>
        );
    }
}

export default NotePage;
