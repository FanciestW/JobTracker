import React, { Component } from 'react';
import { Fab, Paper, Grid, List, ListItem, Divider } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import JobApplicationListItem from '../JobApplicationListItem/JobApplicationListItem';
import './Dashboard.scss';

class Dashboard extends Component {
  render() {
    const jobs = [
      {
        jobTitle: 'Software Engineer Intern',
        jobCompany: 'Microsoft',
        jobStatus: 'Applied',
      },
      {
        jobTitle: 'Software Engineer New Grad',
        jobCompany: 'Facebook',
        jobStatus: 'Interviewing',
      }
    ];
    return (
      <div className="dashboard">
        <Grid container direction="column" spacing={2} style={{ height: '100%', width: '100%', margin: '0' }}>
          <h1>Recent Job Applications</h1>
          <Grid item>
            <Paper>
              <List>
                {jobs.map((jobObj, index) => (
                  <div key={index}>
                    <ListItem>
                      <JobApplicationListItem jobTitle={jobObj.jobTitle} jobCompany={jobObj.jobCompany} jobStatus={jobObj.jobStatus} />
                    </ListItem>
                    {index + 1 < jobs.length ? <Divider /> : null}
                  </div>
                ))}
              </List>
            </Paper>
          </Grid>
          <h1>Upcoming Interviews</h1>
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
