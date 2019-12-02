import React, { Component } from 'react';
import { Fab, Grid, Paper } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import Axios from 'axios';
import InterviewList from '../InterviewList/InterviewList';

class JobInterviewsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interviews: [],
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
    const fabStyle = {
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
              <InterviewList interviews={this.state.interviews} divided />
            </Paper>
            <Fab color="primary" aria-label="add" style={fabStyle}>
              <AddIcon />
            </Fab>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JobInterviewsView;
