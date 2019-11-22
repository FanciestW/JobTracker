import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';

class EmailTextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValid: true,
      value: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this);
  }

  handleOnChange(event) {
    const email = event.target.value;
    const regex = new RegExp(this.props.regex);
    const isValid = !!email.match(regex);
    if (this.props.onChange) {
      this.props.onChange(email, isValid);
    }
    this.setState({ value: email, isValid, });
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
        onChange={this.handleOnChange}
        fullWidth />
    );
  }
}

EmailTextField.propTypes = {
  onChange: PropTypes.func,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  regex: PropTypes.string,
  showError: PropTypes.bool,
};

EmailTextField.defaultProps = {
  label: 'Email',
  placeholder: undefined,
  showError: false,
  regex: '^(([^<>()\\[\\]\\.,;:\\s@"]+(\\.[^<>()\\[\\]\\\\.,;:\\s@"]+)*)|(".+"))@((\\[[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}])|(([a-zA-Z\\-0-9]+\\.)+[a-zA-Z]{2,}))$',
};

export default EmailTextField;
