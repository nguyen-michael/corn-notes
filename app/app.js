const React = require("react");
const ReactDOM = require("react-dom");

// Require the main rendering element
const MainComponent = require("./components/allNotes.js");

// Rendering of the application
ReactDOM.render(<MainComponent />, document.getElementById("app"));