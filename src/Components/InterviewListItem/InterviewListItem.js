import React, { Component } from 'react';
import { Checkbox, Grid, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

class InterviewListItem extends Component {
  render() {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    const date = this.props.date instanceof Date ? 
      this.props.date.toLocaleDateString('en-EN', options) :
      new Date(this.props.date).toLocaleDateString('en-EN', options);
    return (
      <Grid container direction="row" alignItems="center" spacing={1}>
        <Grid item xs={1}>
          <Checkbox style={{padding: '9px 0'}} inputProps={{'aria-label': 'checkbox'}} />
        </Grid>
        <Grid item xs>
          <Typography variant="body1" noWrap>{this.props.company}</Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="body1" noWrap>{this.props.title}</Typography>
        </Grid>
        <Grid item xs={2}>
          <Typography variant="body1" noWrap>{date}</Typography>
        </Grid>
      </Grid>
    );
  }
}

InterviewListItem.propTypes = {
  title: PropTypes.string,
  company: PropTypes.string.isRequired,
  date: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]),
};

InterviewListItem.defaultProps = {
  title: '',
  date: 'No Date'
};

export default InterviewListItem;
