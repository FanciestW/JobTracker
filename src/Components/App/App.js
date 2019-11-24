import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PropTypes from 'prop-types';
import Login from '../SignInUp/Login/Login';
import SignUp from '../SignInUp/SignUp/SignUp';
import AuthedApp from '../AuthedApp/AuthedApp';
import './App.scss';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
theme = responsiveFontSizes(theme);

const PrivateRoute = ({ component: Component, authed, ...rest }) => (
  <Route {...rest} render={(props) => (
    authed === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
);

PrivateRoute.propTypes = {
  component: PropTypes.object,
  authed: PropTypes.bool,
};

function App() {
  const [ authed, setAuthed ] = useState(false);
  const customHistory = createBrowserHistory();

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router history={customHistory}>
        <Switch>
          <PrivateRoute path="/dashboard" authed={authed} component={AuthedApp} />
          {authed ? <Redirect to="/dashboard" /> : undefined}
          <Route exact path="/login">
            <Login onAuthChange={setAuthed} />
          </Route>
          <Route exact path="/signup">
            <SignUp onAuthChange={setAuthed} />
          </Route>
          <Route path="/">
            <Redirect to={authed ? '/dashboard' : '/login'} />
          </Route>
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
