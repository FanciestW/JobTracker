import React, { Component } from 'react';
import { Paper, Grid } from '@material-ui/core';
import JobApplicationList from '../JobApplicationList/JobApplicationList';
import InterviewList from '../InterviewList/InterviewList';
import './Dashboard.scss';
import Axios from 'axios';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      interviews: [],
    };
    this.reloadDashboardData = this.reloadDashboardData.bind(this);
    this.reloadDashboardData();
  }

  componentnWillMount() {
    this.reloadDashboardData();
  }

  async reloadDashboardData() {
    const applicationRes = await Axios.get('/api/application/all');
    const interviewRes = await Axios.get('/api/interview/all');
    if (!interviewRes && !applicationRes) {
      localStorage.setItem('authed', false);
      return;
    }
    if (applicationRes && applicationRes.status === 200) {
      this.setState({
        applications: applicationRes.data.jobApplications,
      });
    }
    if(interviewRes && interviewRes.status === 200) {
      this.setState({
        interviews: interviewRes.data.jobInterviews,
      });
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Grid container direction="column" spacing={2} style={{ height: '100%', width: '100%', margin: '0' }}>
          <Grid item xs>
            <h1>Recent Job Applications</h1>
            <Paper style={{height: '60%', overflow: 'auto'}}>
              <JobApplicationList jobs={this.state.applications} divided />
            </Paper>
          </Grid>
          <Grid item xs>
            <h1>Upcoming Interviews</h1>
            <Paper style={{height: '60%', overflow: 'auto'}}>
              <InterviewList interviews={this.state.interviews} divided />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
