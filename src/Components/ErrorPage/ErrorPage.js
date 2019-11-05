import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorPage extends Component {
  render() {
    return (
      <h1>{this.props.statusCode}</h1>
    );
  }
}

ErrorPage.propTypes = {
  statusCode: PropTypes.number,
};

ErrorPage.defaultProps = {
  statusCode: 404,
};

export default ErrorPage;
