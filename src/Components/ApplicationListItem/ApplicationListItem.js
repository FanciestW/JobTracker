import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ApplicationListItem.scss';

class ApplicationListItem extends Component {
  render() {
    return (
      <p>Application List Item</p>
    );
  }
}

ApplicationListItem.propTypes = {
  company: PropTypes.string.isRequired,
  jobTitle: PropTypes.string.isRequired,
  jobType: PropTypes.string,
  appliedDate: PropTypes.Date,
  status: PropTypes.string,
};

ApplicationListItem.defaultProps = {
  jobType: 'Full Time',
  appliedDate: new Date(),
  status: 'applied'
};

export default ApplicationListItem;