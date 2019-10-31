import React, { Component } from 'react';
import { Fab, Paper, Grid } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import JobApplicationList from '../JobApplicationList/JobApplicationList';
import InterviewList from '../InterviewList/InterviewList';
import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    const jobs = [
      {
        title: 'Software Engineer Intern',
        company: 'Microsoft',
        status: 'Applied',
      },
      {
        title: 'Software Engineer New Grad',
        company: 'Facebook',
        status: 'Interviewing',
      },
      {
        title: 'Software Engineer Intern',
        company: 'Google',
        status: 'Interviewing'
      }
    ];
    const interviews = [
      {
        title: 'Software Engineer New Grad',
        company: 'Facebook',
        date: '12-12-19',
      },
      {
        title: 'Software Engineer Intern',
        company: 'Google',
        date: new Date('1/10/2019'),
      }
    ];
    return (
      <div className="dashboard">
        <Grid container direction="column" spacing={2} style={{ height: '100%', width: '100%', margin: '0' }}>
          <Grid item xs>
            <h1>Recent Job Applications</h1>
            <Paper style={{height: '60%', overflow: 'scroll'}}>
              <JobApplicationList jobs={jobs} divided />
            </Paper>
          </Grid>
          <Grid item xs>
            <h1>Upcoming Interviews</h1>
            <Paper style={{height: '60%', overflow: 'scroll'}}>
              <InterviewList interviews={interviews} divided />
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
