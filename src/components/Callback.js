import React, { Component } from 'react';
// A component that is a loading screen callback after log in. 
// Will redirect to home route when Home is finished rendering

class Callback extends Component {
    render() {
        return (
            <div>
                {/* Can add styles here, or loading bars etc. */}
                <p>Loading...</p>
            </div>
        );
    }
}

export default Callback;