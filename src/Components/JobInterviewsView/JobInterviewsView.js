import React, { Component } from 'react';
import { Grid, Paper } from '@material-ui/core';
import Axios from 'axios';
import InterviewList from '../InterviewList/InterviewList';
import NewInterviewDialog from '../NewInterviewDialog/NewInterviewDialog';

class JobInterviewsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interviews: [],
      dialogOpen: false,
    };
    this.loadInterviews = this.loadInterviews.bind(this);
  }

  componentDidMount() {
    this.loadInterviews();
  }

  async loadInterviews() {
    const res = await Axios.get('/api/interview/all');
    if (!res) {
      localStorage.setItem('authed', false);
      return;
    } else if (res && res.status === 200) {
      this.setState({
        interviews: res.data.jobInterviews,
      });
    }
  }

  render() {
    return (
      <div className="dashboard">
        <Grid container direction="column" spacing={2} style={{ height: '100%', width: '100%', margin: '0' }}>
          <Grid item xs>
            <Paper style={{ height: '100%', overflow: 'auto' }}>
              <InterviewList interviews={this.state.interviews} divided />
            </Paper>
            <NewInterviewDialog open={this.state.dialogOpen} onAdd={this.loadInterviews} />
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JobInterviewsView;
