import React, { Component } from "react";
import { Link } from 'react-router-dom';


class SplashPage extends Component {
    constructor(props) {
        // boxes will need to connect to the DB
        super(props);

        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }
    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    render() {
        const { isAuthenticated } = this.props.auth;
        return (
            <div>
                <div className="parallax-container">
                    <div className="parallax">
                        <img alt="top-box" src="https://res.cloudinary.com/practicaldev/image/fetch/s--IlKqsOJ6--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1100/https://thepracticaldev.s3.amazonaws.com/i/gfmou1w827zax6m1y6pn.jpg" /></div>
                </div>
                <div className="section white">
                    <div className="row container">
                        <div className="center-align">
                            <h2 className="header">Corn Notes</h2>
                            <h4 className="subheader">A cornell style note taking app </h4>
                        </div>


                        <div className="row">
                            <div className="col s12 m4">
                                <div className="center promo">
                                    <i className="material-icons">flash_on</i>
                                    <p className="promo-caption">Speeds up note taking</p>
                                    <p className="light center">These notes are already formated, you just need to add the details!</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="center promo">
                                    <i className="material-icons">group</i>
                                    <p className="promo-caption">User Experience Focused</p>
                                    <p className="light center">Our design is simple and easy to use! Making great notes has never been so easy</p>
                                </div>
                            </div>

                            <div className="col s12 m4">
                                <div className="center promo">
                                    <i className="material-icons">settings</i>
                                    <p className="promo-caption">Easy to work with</p>
                                    <p className="light center">These notes are just a click away!</p>
                                </div>
                            </div>
                        </div>
                        {/* Conditional Rendering. Render the login button if not logged in.*/}
                        {/* Renders the links to the proper pages and log out button when logged in. */}
                        {
                            isAuthenticated() && (
                                <div className="container">
                                    <div className="row center-align">
                                        <Link to="/allNotes"><button className="btn btn-default" style={styles.buttonSpace}>Your Notes</button></Link>

                                        <button
                                            className="btn btn-default"
                                            onClick={this.logout}
                                        >
                                            Log Out
                                    </button>
                                    </div>


                                </div>
                            )
                        }
                        {
                            !isAuthenticated() && (
                                <div className="container">
                                    <div className="row center-align">
                                        <button
                                            className="btn btn-default"
                                            onClick={this.login}
                                        >
                                            Log In
                                    </button>
                                    </div>
                                </div>
                            )
                        }
                    </div>
                </div>
                <div className="parallax-container">
                    <div alt="bottom-box" className="parallax"><img src="https://specials-images.forbesimg.com/imageserve/668364679/960x0.jpg?fit=scale" /></div>
                </div>
            </div>
        );
    }
}

const styles = {
    buttonSpace: {
        marginRight: '20px'
    }
}

export default SplashPage;





