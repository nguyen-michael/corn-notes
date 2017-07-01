import React, {Component} from "react";
import NotePage from './NotePage';
import Footer from './common/footer'


// Testing component, take away or reuse or whater.
class Main extends Component {
    constructor(props) {
        // Passes any props to the superclass, the constructor that generates this Main class. 
        super(props);
    }

    render() {
        return (
            <div>
                <NotePage />
                <Footer />
            </div>
        );
    }
}

module.exports = Main;