import React from 'react';
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom';
import App from './App';
// import Home from './Home/Home';
import SplashPage from './components/SplashPage';
import NotePage from './components/NotePage';
import AllNotes from './components/allNotes';

// import allNotes from './Callback/Callback';
// import notePage from
// import Auth from './Auth/Auth';
import history from './history';

// const auth = new Auth();

// const handleAuthentication = (nextState, replace) => {
//   if (/access_token|id_token|error/.test(nextState.location.hash)) {
//     auth.handleAuthentication();
//   }
// }

export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} component={NotePage}>
            <Switch>
                <Route exact path="/" component={SplashPage} />
                <Route path="/notePage" component={NotePage} />
                <Route path="/allNotes" component={AllNotes} />

            </Switch>
        </BrowserRouter>
    );
}


