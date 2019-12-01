import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import JobApplicationList from '../JobApplicationList/JobApplicationList';

class JobApplicationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [
        { title: 'Test', company: 'Test Company', },
        { title: 'Test2', company: 'Test2 Company', },
      ]
    };
  }

  render() {
    return (
      <div className="dashboard">
        <Grid container direction="column" spacing={2} style={{ height: '100%', width: '100%', margin: '0' }}>
          <Grid item xs>
            <Paper style={{height: '100%', overflow: 'auto'}}>
              <JobApplicationList jobs={this.state.applications} divided />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JobApplicationsView;
