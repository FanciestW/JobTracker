import React, { useState } from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import './App.scss';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
theme = responsiveFontSizes(theme);

function App() {
  const [ authed, setAuthed ] = useState(false);

  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <Navbar />
          <div className="app-content">
            <Switch>
              <Route exact path="/dashboard" component={Dashboard} />
              <Route exact path="/" component={Dashboard} />
              <Route component={ErrorPage} />
            </Switch>
          </div>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
