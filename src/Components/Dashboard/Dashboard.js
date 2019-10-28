import React, { Component } from 'react';
import { Fab, Paper, Grid, List, ListItem } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Grid container direction="column" spacing={2} style={{height: '100%', width: '100%', margin: '0'}}>
          <h1>Dashboard</h1>
          <Grid item>
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
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
        <Fab color="primary" aria-label="add" className="add-fab">
          <AddIcon />
        </Fab>
      </div>
    );
  }
}

export default Dashboard;
