import React, { Component } from 'react';
import { Paper, Button, Typography, Box, TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EmailTextField from '../EmailTextField/EmailTextField';
import PasswordTextField from '../PasswordTextField/PasswordTextField';
import '../SignInUp.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstNameValue: '',
      firstNameValid: false,
      lastNameValue: '',
      lastNameValid: false,
      emailValue: '',
      emailValid: false,
      passwordValue: '',
      passwordValid: false,
      passwordConfirmValue: '',
      passwordConfirmValid: false,
    };
    this.handleFirstNameField = this.handleFirstNameField.bind(this);
    this.handleLastNameField = this.handleLastNameField.bind(this);
    this.handleEmailField = this.handleEmailField.bind(this);
    this.handlePasswordField = this.handlePasswordField.bind(this);
    this.handlePasswordConfirmField = this.handlePasswordConfirmField.bind(this);
  }

  handleFirstNameField(event) {
    const value = event.target.value;
    this.setState({ firstNameValue: value, firstNameValid: value.length > 0 });
  }

  handleLastNameField(event) {
    const value = event.target.value;
    this.setState({ lastNameValue: value, lastNameValid: value.length > 0 });
  }

  handleEmailField(value, isValid) {
    this.setState({ emailValue: value, emailValid: isValid });
  }

  handlePasswordField(value, isValid) {
    this.setState({ passwordValue: value, passwordValid: isValid });
  }

  handlePasswordConfirmField(value, isValid) {
    this.setState({ passwordConfirmValue: value, passwordConfirmValid: isValid });
  }

  render() {
    return (
      <div className="auth-container">
        <Paper className="login-form">
          <h1>Sign Up</h1>
          <TextField required autoFocus
            fullWidth
            label="First Name"
            margin="normal"
            variant="outlined"
            onChange={this.handleFirstNameField} />
          <TextField required
            fullWidth
            label="Last Name"
            margin="normal"
            variant="outlined"
            onChange={this.handleLastNameField} />
          <EmailTextField 
            onChange={this.handleEmailField}
            showError />
          <PasswordTextField 
            onChange={this.handlePasswordField}
            showError />
          <PasswordTextField 
            label="Confirm Password"
            onChange={this.handlePasswordConfirmField}
            match={this.state.passwordValue}
            showError />
          <Button className="login-button"
            variant="contained"
            color="primary"
            style={{ margin: '20px 0' }}>
            Sign Up
          </Button>
          <Typography>
            <Box textAlign="center">
              Already have an account?
              <Link to="/login" className="signup-link">
                Go to login.
              </Link>
            </Box>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default SignUp;
