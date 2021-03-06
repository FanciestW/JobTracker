import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Paper, Button, Typography, Box, TextField, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import EmailTextField from '../EmailTextField/EmailTextField';
import PasswordTextField from '../PasswordTextField/PasswordTextField';
import CustomSnackbar from '../../CustomSnackbar/CustomSnackbar';
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
      failSnackbarOpen: false,
    };
    this.handleFirstNameField = this.handleFirstNameField.bind(this);
    this.handleLastNameField = this.handleLastNameField.bind(this);
    this.handleEmailField = this.handleEmailField.bind(this);
    this.handlePasswordField = this.handlePasswordField.bind(this);
    this.handlePasswordConfirmField = this.handlePasswordConfirmField.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
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

  async handleSignUp() {
    try {
      if (!this.state.firstNameValid ||
          !this.state.lastNameValid ||
          !this.state.emailValid ||
          !this.state.passwordValid ||
          !this.state.passwordConfirmValid) {
        return;
      }
      const reqBody = {
        firstName: this.state.firstNameValue,
        lastName: this.state.lastNameValue,
        email: this.state.emailValue,
        password: this.state.passwordValue,
      };
      const response = await Axios.post('/api/user/signup', reqBody);
      console.log(response);
      if (response.status === 200) { 
        localStorage.setItem('authed', 'true');
      } else {
        localStorage.setItem('authed', 'false');
        this.setState({ failSnackbarOpen: true, });
      }
      if (this.props.onAuthChange) {
        this.props.onAuthChange(response.status === 200);
      }
    } catch (err) {
      console.log(err);
      this.setState({ failSnackbarOpen: true, });
    }
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
            style={{ margin: '20px 0' }}
            onClick={this.handleSignUp}>
            Sign Up
          </Button>
          <Typography component="div">
            <Box textAlign="center" component="p">
              Already have an account?
              <Link to="/login" className="signup-link">
                Go to login.
              </Link>
            </Box>
          </Typography>
        </Paper>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          open={this.state.failSnackbarOpen}
          autoHideDuration={6000}
          onClose={() => this.setState({ failSnackbarOpen: false })} >
          <CustomSnackbar
            onClose={() => this.setState({ failSnackbarOpen: false })}
            variant="error"
            message="Unable to sign up at this time." />
        </Snackbar>
      </div>
    );
  }
}

SignUp.propTypes = {
  onAuthChange: PropTypes.func,
};

export default SignUp;
