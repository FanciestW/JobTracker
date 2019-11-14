import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import './AuthedApp.scss';

class AuthedApp extends Component {
  render() {
    return (
      <div className='app'>
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
      </div>
    );
  }
}

export default AuthedApp;