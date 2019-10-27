import React, { Component } from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Fab color="primary" aria-label="add" className="add-fab">
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default Dashboard;
