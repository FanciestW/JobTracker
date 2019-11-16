import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class PasswordTextField extends Component {
  render() {
    return (
      <TextField
        required
        label={this.props.label}
        placeholder={this.props.placeholder}
        margin="normal"
        variant="outlined"
        type="password"
        fullWidth />
    );
  }
}

PasswordTextField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

PasswordTextField.defaultProps = {
  label: 'Password',
  placeholder: undefined,
};

export default PasswordTextField;