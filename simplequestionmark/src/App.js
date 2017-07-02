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

export default App;
