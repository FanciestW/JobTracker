import React, { Component } from 'react';
import { Grid, Checkbox, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

class JobApplicationListItem extends Component {
  render() {
    return (
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item xs={1}>
          <Checkbox style={{padding: '9px 0'}} inputProps={{'aria-label': 'checkbox'}} />
        </Grid>
        <Grid item xs={6}>
          <Typography variant="body1" noWrap>{this.props.title}</Typography>
        </Grid>
        <Grid item xs>
          <Typography variant="body1" noWrap>{this.props.company}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" noWrap>{this.props.status}</Typography>
        </Grid>
      </Grid>
    );
  }
}

JobApplicationListItem.propTypes = {
  title: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

JobApplicationListItem.defaultProps = {
};

export default JobApplicationListItem;
