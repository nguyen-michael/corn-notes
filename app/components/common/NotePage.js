import React, { Component } from "react";
import SlideNav from './slideNav'
import TopBox from './topBox'
import QABox from './QABox'
import BottomBox from './bottomBox'

// Testing component, take away or reuse or whater.
class NotePage extends Component {
    constructor(props) {
        // Passes any props to the superclass, the constructor that generates this Main class. 
        super(props);
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
                    <div className="section scrollspy" id="main-box">
                        <QABox boxName={'Elaboration'} />
                        <QABox boxName={'Distinction'} />
                        <QABox boxName={'Relation'} />
                        <QABox boxName={'Example'} />
                    </div>
                    <hr />
                    <div className="section scrollspy" id="bottom-box">
                        <BottomBox />
                    </div>
                    <hr />


                </div>
                {/*scrolls spy needs style elments that were taken out*/}
                <div className="col hide-on-small-only m3 l2">
                    <div className="toc-wrapper pinned" >
                        <a href="#" data-activates="slide-out" className="button-collapse btn"><i className="material-icons">menu</i></a>

                        <div >

                            <ul className="section table-of-contents">
                                <li><a href="#top-box">Top</a></li>
                                <li><a href="#main-box">Main</a></li>
                                <li><a href="#bottom-box">Bottom</a></li>
                            </ul>
                        </div>

                        <div className="fixed-action-btn horizontal">
                            <a className="btn-floating btn-large red">
                                <i className="large material-icons">mode_edit</i>
                            </a>
                            <ul>
                                <li><a className="btn-floating red"><i className="material-icons">insert_chart</i></a></li>
                                <li><a className="btn-floating yellow darken-1"><i className="material-icons">format_quote</i></a></li>
                                <li><a className="btn-floating green"><i className="material-icons">publish</i></a></li>
                                <li><a className="btn-floating blue button-collapse" data-activates="slide-out"><i className="material-icons">menu</i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        );
    }
}

module.exports = NotePage;