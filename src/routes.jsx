import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
// import App from './App';
// import Home from './Home/Home';
import SplashPage from './components/SplashPage';
import NotePage from './components/NotePage';
import AllNotes from './components/allNotes';

// import allNotes from './Callback/Callback';
import Callback from './components/Callback';
// import notePage from
import Auth from './Auth/Auth';
import history from './history';

// Import Auth objects and classes.
const auth = new Auth();

// Boiler plate method.
const handleAuthentication = (nextState, replace) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
        auth.handleAuthentication();
    }
}

export const makeMainRoutes = () => {
    return (
        <BrowserRouter history={history} component={NotePage}>
            <Switch>
                {/* When a path is hit, the virtual DOM will serve the rendered page. The rendered page (in this case, a component) will receive props and the auth object as prop. This allows us to block rendering if not authenticated, as well as get our User ID from local storage, etc.*/}

                {/*<Route exact path="/" component={SplashPage} />*/}
                <Route exact path="/" render={(props) => <SplashPage auth={auth} {...props} />} />
                {/*<Route path="/notePage" component={NotePage} />*/}
                <Route path="/notePage" render={(props) => <NotePage auth={auth} {...props} />} />
                {/*<Route path="/allNotes" component={AllNotes} />*/}
                <Route path="/allNotes" render={(props) => <AllNotes auth={auth} {...props} />} />
                {/* Callback path, which is a safe way to return to our app from Auth0 external login.*/}
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }} />

            </Switch>
        </BrowserRouter>
    );
}


