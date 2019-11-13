import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import Login from '../SignInUp/Login/Login';
import SignUp from '../SignInUp/SignUp/SignUp';
import './App.scss';
import AuthedApp from '../AuthedApp/AuthedApp';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
theme = responsiveFontSizes(theme);

const fakeAuth = {
  isAuthenticated: true,
  authenticate(cb) {
    fakeAuth.isAuthenticated = true;
    setTimeout(cb, 100); // fake async
  },
  signout(cb) {
    fakeAuth.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    fakeAuth.isAuthenticated === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

function App() {
  const [ authed, setAuthed ] = useState(false);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" component={AuthedApp} />
          <Route component={ErrorPage} />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
