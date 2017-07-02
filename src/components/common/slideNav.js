import React, { Component } from "react";

class SlideNav extends Component {


    render() {
        return (
            <div>
                <ul id="slide-out" className="side-nav">
                    <li>
                        <div className="userView">
                            <div className="background">
                                <img alt="Temp Alt Text"  src="https://t3.ftcdn.net/jpg/01/04/53/12/240_F_104531214_sYh7NtYPbtT5Zy1uDfvMObA1yRfwMvK5.jpg" />
                            </div>
                            <a href="#!user">
                                <img alt="Temp Alt Text" className="circle" src="http://static2.fjcdn.com/comments/Every+picture+this+guy+is+in+looks+like+he+s+in+_4996f31786d0fcb7417ede5e2fea4244.jpg" /></a>
                            <a href="#!name"><span className="white-text name textShadow">John Doe</span></a>
                            <a href="#!email"><span className="white-text email textShadow">jdandturk@gmail.com</span></a>
                        </div>
                    </li>
                    <li><a href="#!"><i className="material-icons">cloud</i>First Link With Icon</a></li>
                    <li><a href="#!">Second Link</a></li>
                    <li>
                        <div className="divider"></div>
                    </li>
                    <li><a className="subheader">Subheader</a></li>
                    <li><a className="waves-effect" href="#!">Third Link With Waves</a></li>
                </ul>
            </div>

        );
    }
}

export default SlideNav;
