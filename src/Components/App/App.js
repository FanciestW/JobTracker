import React from 'react';
import { MuiThemeProvider, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import { BrowserRouter as Router, Redirect, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import './App.scss';

let theme = createMuiTheme({
  palette: {
    type: 'dark',
  },
});
theme = responsiveFontSizes(theme);

function App() {
  return (
    <div className="App">
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <div className="app-content">
          <Router>
            <Switch>
              <Route path="/dashboard" component={Dashboard} />
              <Route>
                <Redirect to={'/dashboard'} />
              </Route>
            </Switch>
          </Router>
        </div>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
