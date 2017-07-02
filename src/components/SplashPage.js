import React, { Component } from "react";



class SplashPage extends Component {
    constructor(props) {
        // boxes will need to connect to the DB
        super(props);

    }

    render() {
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax">
                        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--IlKqsOJ6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1100/https://thepracticaldev.s3.amazonaws.com/i/gfmou1w827zax6m1y6pn.jpg" /></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <h2 className="header">Corn Notes</h2>
                        <p className="grey-text text-darken-3 lighten-3">SomeStuff about corn notes</p>
                    </div>
                </div>
                <div className="parallax-container">
                    <div className="parallax"><img src="https://specials-images.forbesimg.com/imageserve/668364679/960x0.jpg?fit=scale" /></div>
                </div>
            </div>
        );
    }
}

export default SplashPage;





