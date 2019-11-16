import React, { Component } from 'react';
import { Paper, Button } from '@material-ui/core';
import EmailTextField from '../EmailTextField/EmailTextField';
import PasswordTextField from '../PasswordTextField/PasswordTextField';
import '../SignInUp.scss';

class Login extends Component {
  render() {
    return (
      <div className="auth-container">
        <Paper className="login-form">
          <h1 style={{ textAlign: 'center' }}>Login</h1>
          <EmailTextField />
          <PasswordTextField />
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Paper>
      </div>
    );
  }
}

export default Login;
