import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// component imports
import NotePage from './components/NotePage';
import Footer from './components/common/footer'

class App extends Component {
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
        {
          isAuthenticated() && (
            <div>
              <NotePage />
              <Footer />
            </div>
          )
        }
        {
          !isAuthenticated() && (
            <div>
              You're not logged in, please log in.
              <button
                className="btn"
                onClick={this.login}
              >
                Log In
              </button>
            </div>
          )
        }

      </div>
    );
  }
}

export default App;
