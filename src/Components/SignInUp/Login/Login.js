import React, { Component } from 'react';
import { Paper, Button, Checkbox, Typography, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import EmailTextField from '../EmailTextField/EmailTextField';
import PasswordTextField from '../PasswordTextField/PasswordTextField';
import '../SignInUp.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedRememberMe: false,
    };
  }

  render() {
    const handleChange = name => event => {
      this.setState({ ...this.state, [name]: event.target.checked });
    };
    return (
      <div className="auth-container">
        <Paper className="login-form">
          <h1 style={{ textAlign: 'center' }}>Login</h1>
          <EmailTextField />
          <PasswordTextField />
          <Typography>
            <Box textAlign="left">
              <Checkbox
                checked={this.state.checkedRememberMe}
                onChange={handleChange('checkedRememberMe')}
                value="checkedRememberMe"
                color="primary" />
                Remember Me
            </Box>
          </Typography>
          <Button className="login-button"
            variant="contained"
            color="primary"
            style={{ margin: '20px 0' }}>
            Login
          </Button>

          <Typography>
            <Box textAlign="center">
              Don&apos;t have an account? 
              <Link to="/signup" className="signup-link">
                Sign up here.
              </Link>
            </Box>
          </Typography>
        </Paper>
      </div>
    );
  }
}

export default Login;
