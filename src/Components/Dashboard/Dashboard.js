import React, { Component } from 'react';
import { Fab, Paper, List, ListItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        <Paper>
          <List>
            <ListItem>
              Test1
            </ListItem>
            <ListItem>
              Test2
            </ListItem>
            <ListItem>
              Test3
            </ListItem>
            <ListItem>
              Test4
            </ListItem>
          </List>
        </Paper>
        <Paper>
          <List>
            <ListItem>
              Test1
            </ListItem>
            <ListItem>
              Test2
            </ListItem>
            <ListItem>
              Test3
            </ListItem>
            <ListItem>
              Test4
            </ListItem>
          </List>
        </Paper>
        <Fab color="primary" aria-label="add" className="add-fab">
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default Dashboard;
