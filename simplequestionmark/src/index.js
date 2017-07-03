import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { mainRoutes } from "./routes";

const routes = mainRoutes();

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(routes, document.getElementById('root'));
registerServiceWorker();
