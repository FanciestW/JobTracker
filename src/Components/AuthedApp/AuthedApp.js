import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import ErrorPage from '../ErrorPage/ErrorPage';
import './AuthedApp.scss';
import Axios from 'axios';

class AuthedApp extends Component {
  constructor(props) {
    super(props);
    Axios.interceptors.response.use((res) => {
      return res;
    }, (err) => {
      if (err.response.status === 401) {
        localStorage.setItem('authed', false);
      }
    });
  }

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
