import React, { Component } from 'react';
import { Paper, Button, Checkbox, FormControlLabel, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EmailTextField from '../EmailTextField/EmailTextField';
import PasswordTextField from '../PasswordTextField/PasswordTextField';
import '../SignInUp.scss';

class SignUp extends Component {
  render() {
    return (
      <div className="auth-container">
        <Paper className="login-form">
          <h1>Sign Up</h1>
          <EmailTextField />
          <PasswordTextField />
          <PasswordTextField label="Confirm Password" />
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
