import React, { Component } from 'react';

class Start extends Component {
    constructor(props) {
        // Passes any props to the superclass, the constructor that generates this Main class.
        super(props);
        this.goTo = this.goTo.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    goTo(route) {
        this.props.history.replace(`/${route}`)
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
                <div>
                    {
                        isAuthenticated() && (
                            <button
                                className="btn"
                                onClick={this.logout}
                            >
                                Log Out
                            </button>)
                    }
                    {
                        !isAuthenticated() && (
                            <button
                                className="btn"
                                onClick={this.login}
                            >
                                Log In
                            </button>)
                    }
                    <button 
                        className="btn"
                        onClick={this.goTo.bind(this, "app")}
                    >
                        See your notes
                    </button>
                </div>
            </div>
        );
    }
}

export default Start;
