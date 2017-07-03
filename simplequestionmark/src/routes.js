import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import App from './App';
// import Home from './Home/Home';
// import Callback from './Callback/Callback';
import Auth from './Auth/Auth.js';
import history from './history';
import Start from './Start-auth-test';
import Callback from './Callback/Callback.js';
const auth = new Auth();

// A function to handle the login authentication, given that the tokens exist.
const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const mainRoutes = () => {
//   return (
//     // Generating the routes with react router.
//     // Also remember, the props here are passed to the Children Routes. So History and component are passed.
//       <BrowserRouter history={history} component={App}>
//         <div>
//           {/* The '/' path will match all paths unless stated. with the "exact" flag <route exact path> */}
//             {/* This is prop spreading. Take our props and make them children's props*/}
//           <Route path="/" render={(props) => <App auth={auth} {...props} />} />
//           <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
//           {/* The Reason we don't see it here is that This isn't a direct return of the render prop. It handles a method first and then returns a different Component. */}
//           <Route path="/callback" render={(props) => {
//             handleAuthentication(props);
//             return <Callback {...props} /> 
//           }}/>
//         </div>
//       </BrowserRouter> 
//   );

    return (
        <BrowserRouter history={history} component={Start}>
            <div>
                <Route path="/" render={(props) => <Start auth={auth} {...props} />} />
                <Route path="/app" render={(props) => <App auth={auth} {...props} />} />
                <Route path="/callback" render={(props) => {
                    handleAuthentication(props);
                    return <Callback {...props} />
                }} />
            </div>
        </BrowserRouter>
    );
}
