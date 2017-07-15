import React, { Component } from "react";


// Testing component, take away or reuse or whater.
class Footer extends Component {
    constructor(props) {
        // Passes any props to the superclass, the constructor that generates this Main class.
        super(props);
    }

    render() {
        return (

            <footer className="page-footer cyan">
                <div className="container">
                    <div className="row">
                        <div className="col l6 s12">
                            <p className="grey-text text-lighten-4">2017 Copyright. Nguyen, Michael; LaRou, Tim; Kunkel, Kyle</p>
                        </div>
                        <div className="col l4 offset-l2 s12">
                            <h5 className="white-text">Links</h5>
                            <ul>
                                <li><a className="grey-text text-lighten-3" href="https://github.com/nguyen-michael/corn-notes.git" target="_blank">Github</a></li>
                                <li><a className="grey-text text-lighten-3" href="https://en.wikipedia.org/wiki/Cornell_Notes" target="_blank">About Cornell Notes</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
