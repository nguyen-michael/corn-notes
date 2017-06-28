import React, { Component } from "react";

class ScrollSpy extends Component {
    constructor(props) {

        super(props);
    }

    render() {
        return (

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
        );
    }
}

module.exports = ScrollSpy;



