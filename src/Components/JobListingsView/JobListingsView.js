import React, { Component } from 'react';
import { Grid, Paper, Table, TableRow, TableHead, TableCell, TableBody } from '@material-ui/core';
import Axios from 'axios';

class JobListingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
    };
    this.getJobListings = this.getJobListings.bind(this);
  }

  componentDidMount() {
    this.getJobListings();
  }

  async getJobListings(description = undefined, location = undefined) {
    const jobRes = await Axios.get('/api/jobs', { params: { description, location } });
    const { jobs } = jobRes.data;
    this.setState({ jobs });
  }

  render() {
    const jobListingItems = this.state.jobs.map((job, index) => (
      <TableRow key={index}>
        <TableCell component="th" scope="row">
          {job.title}
        </TableCell>
        <TableCell align="right">{job.company}</TableCell>
        <TableCell align="right">{job.location}</TableCell>
        <TableCell align="right">{job.type}</TableCell>
      </TableRow>
    ));
    return (
      <div className="dashboard">
        <Grid container direction="column" spacing={2} style={{ height: '100%', width: '100%', margin: '0' }}>
          <Grid item xs>
            <Paper style={{ height: '100%', width: '100%', overflow: 'auto' }}>
              <Table style={{ minWidth: '100%' }}>
                <TableHead>
                  <TableRow style={{ minWidth: '100%' }}>
                    <TableCell style={{fontWeight: 900}}>Job Title</TableCell>
                    <TableCell align="right" style={{fontWeight: 900}}>Company</TableCell>
                    <TableCell align="right" style={{fontWeight: 900}}>Location</TableCell>
                    <TableCell align="right" style={{fontWeight: 900}}>Type</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {jobListingItems}
                </TableBody>
              </Table>
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default JobListingsView;
