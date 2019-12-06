import React, { Component } from 'react';
import { Grid, Paper, Table, TableRow, TableHead, TableCell, TableBody, TextField, Button } from '@material-ui/core';
import Axios from 'axios';

class JobListingsView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [],
      description: '',
      location: '',
    };
    this.getJobListings = this.getJobListings.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.getJobListings();
  }

  async getJobListings() {
    const { description, location } = this.state;
    const jobRes = await Axios.get('/api/jobs/search', { params: { description, location } });
    const { jobs } = jobRes.data;
    this.setState({ jobs });
    console.log(JSON.stringify(jobs, null, 2));
  }

  handleSearch() {
    this.getJobListings();
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
        <Grid container direction="column" alignItems="center" justify="center" spacing={2} style={{ width: '100%', margin: '0' }}>
          <Grid item xs>
            <TextField label="Description" placeholder="Python" onChange={(event) => this.setState({ description: event.target.value })}/>
            <TextField label="Location" placeholder="Boston" onChange={(event) => this.setState({ location: event.target.value })}/>
            <Button variant="contained" color="primary" style={{height: '100%'}} onClick={this.handleSearch}>Search</Button>
          </Grid>
        </Grid>
        <Grid container direction="column" spacing={2} style={{ height: '90%', width: '100%', margin: '0' }}>
          <Grid item xs>
            <Paper style={{ height: '100%', width: '100%', overflow: 'auto' }}>
              <Table style={{ minWidth: '100%' }}>
                <TableHead>
                  <TableRow style={{ minWidth: '100%' }}>
                    <TableCell style={{ fontWeight: 900 }}>Job Title</TableCell>
                    <TableCell align="right" style={{ fontWeight: 900 }}>Company</TableCell>
                    <TableCell align="right" style={{ fontWeight: 900 }}>Location</TableCell>
                    <TableCell align="right" style={{ fontWeight: 900 }}>Type</TableCell>
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
