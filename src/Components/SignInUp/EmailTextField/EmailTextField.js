import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

class EmailTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: false,
    };
  }

  render() {
    return (
      <TextField
        required
        label={this.props.label}
        placeholder={this.props.placeholder}
        margin="normal"
        variant="outlined"
        fullWidth />
    );
  }
}

EmailTextField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

EmailTextField.defaultProps = {
  label: 'Email',
  placeholder: 'example@example.com'
};

export default EmailTextField;
