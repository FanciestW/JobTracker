import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
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

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />
          <PrivateRoute path="/dashboard" authed={authed} component={AuthedApp} />
          <Redirect to="/dashboard" />
        </Switch>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
