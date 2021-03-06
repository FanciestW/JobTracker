import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Login from '../SignInUp/Login/Login';
import SignUp from '../SignInUp/SignUp/SignUp';
import AuthedApp from '../AuthedApp/AuthedApp';
import './App.scss';

let theme = createMuiTheme({
  palette: {
    type: localStorage.getItem('theme') || 'dark',
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
  const [ authed, setAuthed ] = useState(localStorage.getItem('authed')==='true');
  const customHistory = createBrowserHistory();

  Axios.interceptors.response.use((res) => {
    return res;
  }, (err) => {
    if (err.response.status === 401) {
      localStorage.setItem('authed', false);
      setAuthed(false);
    }
  });

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
