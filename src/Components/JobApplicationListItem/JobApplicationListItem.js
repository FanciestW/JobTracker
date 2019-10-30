import React, { Component } from 'react';
import { Grid, Checkbox, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

class JobApplicationListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container direction="row" justify={this.props.justify} alignItems="center">
        <Grid item xs={1} alignItems="center">
          <Checkbox style={{padding: '9px 0'}} inputProps={{'aria-label': 'checkbox'}} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" noWrap>{this.props.jobTitle}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" noWrap>{this.props.jobCompany}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" noWrap>{this.props.jobStatus}</Typography>
        </Grid>
      </Grid>
    );
  }
}

JobApplicationListItem.propTypes = {
  jobTitle: PropTypes.string.isRequired,
  jobCompany: PropTypes.string.isRequired,
  jobStatus: PropTypes.string.isRequired,
  justify: PropTypes.string,
};

JobApplicationListItem.defaultProps = {
  justify: 'left'
};

export default JobApplicationListItem;
