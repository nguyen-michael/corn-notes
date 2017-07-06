import history from '../history';
import auth0 from 'auth0-js';
import { AUTH_CONFIG } from './auth-vars.js';

// Heroku configuration mod: Removing the local file.Changing the pointer and allowing it to attempt to obtain process.env

// Generally boilerplate for setting up the Auth0 class and methods.
// There's many navigations to Home route, since it's treating it as a single page app.
// Modify Redirect routes as needed.

export default class Auth {
  auth0 = new auth0.WebAuth({
    // Adding heroku support with process.env
    domain: process.env.REACT_APP_AUTH0_DOMAIN || AUTH_CONFIG.domain,
    clientID: process.env.REACT_APP_AUTH0_CLIENT_ID || AUTH_CONFIG.clientId,
    redirectUri: process.env.REACT_APP_AUTH0_CALLBACK_URL || AUTH_CONFIG.callbackUrl,
    // audience: `https://${AUTH_CONFIG.domain}/userinfo`,
    audience: `https://${process.env.REACT_APP_AUTH0_DOMAIN || AUTH_CONFIG.domain}/userinfo`,
    responseType: 'token id_token',
    scope: 'openid'
  });

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/');
      } else if (err) {
        history.replace('/');
        console.log(err);
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }

  setSession(authResult) {
    // Set the time that the access token will expire at
    let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
    console.log(authResult.accessToken);
    localStorage.setItem('access_token', authResult.accessToken);
    localStorage.setItem('id_token', authResult.idToken);
    localStorage.setItem('expires_at', expiresAt);
    // navigate to the home route
    history.replace('/');
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // access token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
