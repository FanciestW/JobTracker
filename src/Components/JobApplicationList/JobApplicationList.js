import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, ListItem, Divider } from '@material-ui/core';
import JobApplicationListItem from '../JobApplicationListItem/JobApplicationListItem';

class JobApplicationList extends Component {
  render() {
    const jobListItems = this.props.jobs.map((job, index) => (
      <div key={index}>
        <ListItem>
          <JobApplicationListItem title={job.title} company={job.company} status={job.status} />
        </ListItem>
        {this.props.divided ? index + 1 < this.props.jobs.length ? <Divider /> : null : null}
      </div>
    ));
    return (
      <List>
        {jobListItems}
      </List>
    );
  }
}

JobApplicationList.propTypes = {
  jobs: PropTypes.array,
  widget: PropTypes.bool,
  divided: PropTypes.bool,
};

JobApplicationList.defaultProps = {
  jobs: [],
  widget: false,
  divided: false,
};

export default JobApplicationList;