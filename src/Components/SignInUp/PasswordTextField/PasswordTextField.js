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
    let isValid;
    if (this.props.match) {
      isValid = password === this.props.match;
    } else {
      isValid = !!password.match(regex);
    }
    this.setState({ value: password, isValid, });
    if (this.props.onChange) {
      this.props.onChange(password, isValid);
    }
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
  regex: PropTypes.instanceOf(RegExp),
  showError: PropTypes.bool,
  match: PropTypes.string,
};

PasswordTextField.defaultProps = {
  label: 'Password',
  placeholder: undefined,
  regex: /^.*(?=.{8,})((?=.*[!?@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/g,
  showError: false,
};

export default PasswordTextField;