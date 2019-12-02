import React, { Component } from 'react';
import { Fab, Grid, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';
import JobApplicationList from '../JobApplicationList/JobApplicationList';

class JobApplicationsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
    };
    this.loadJobApplications = this.loadJobApplications.bind(this);
    this.loadJobApplications();
  }

  componentDidMount() {
    this.loadJobApplications();
  }

  async loadJobApplications() {
    const res = await Axios.get('/api/application/all');
    if (!res) {
      localStorage.setItem('authed', false);
      return;
    } else if (res && res.status === 200) {
      this.setState({
        applications: res.data.jobApplications,
      });
    }
  }

  render() {
    const style = {
      margin: 0,
      top: 'auto',
      right: 20,
      bottom: 20,
      left: 'auto',
      position: 'absolute',
    };
    return (
      <div className="dashboard">
        <Grid container direction="column" spacing={2} style={{ height: '100%', width: '100%', margin: '0' }}>
          <Grid item xs>
            <Paper style={{ height: '100%', overflow: 'auto' }}>
              <JobApplicationList jobs={this.state.applications} divided />
            </Paper>
            <Fab color="primary" aria-label="add" style={style}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JobApplicationsView;
