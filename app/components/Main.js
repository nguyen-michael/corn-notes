import {React, Component} from "react";

class Main extends Component {
    constructor(props) {
        // Passes any props to the superclass, the constructor that generates this Main class. 
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Hello</h1>
                <p>Goodnight</p>
            </div>
        );
    }
}

module.exports = Main;