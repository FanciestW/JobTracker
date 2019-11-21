import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';

class PasswordTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      value: '',
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const password = event.target.value;
    const regex = new RegExp(this.props.regex);
    if (this.props.match) {
      this.setState({ isValid: password === this.props.match });
    } else {
      this.setState({ isValid: !!password.match(regex) });
    }
    if (this.props.onChange) {
      this.props.onChange(password, this.state.isValid);
    }
    this.setState({ value: password });
  }

  render() {
    return (
      <TextField
        required
        error={!this.state.isValid && this.props.showError}
        label={this.props.label}
        placeholder={this.props.placeholder}
        margin="normal"
        variant="outlined"
        type="password"
        onChange={this.handleOnChange}
        fullWidth />
    );
  }
}

PasswordTextField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  regex: PropTypes.string,
  showError: PropTypes.bool,
  match: PropTypes.string,
};

PasswordTextField.defaultProps = {
  label: 'Password',
  placeholder: undefined,
  regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})',
  showError: false,
};

export default PasswordTextField;