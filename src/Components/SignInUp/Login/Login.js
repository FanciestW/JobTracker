import React, { Component } from 'react';
import { Paper, Button, Checkbox, FormControlLabel, Typography, Box, Snackbar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Axios from 'axios';
import EmailTextField from '../EmailTextField/EmailTextField';
import PasswordTextField from '../PasswordTextField/PasswordTextField';
import CustomSnackbar from '../../CustomSnackbar/CustomSnackbar';
import '../SignInUp.scss';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailValue: '',
      emailValid: false,
      passwordValue: '',
      checkedRememberMe: false,
      failSnackbarOpen: false,
    };
    this.handleEmailField = this.handleEmailField.bind(this);
    this.handlePasswordField = this.handlePasswordField.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleEmailField(value, isValid) {
    this.setState({ emailValue: value, emailValid: isValid });
  }

  handlePasswordField(value) {
    this.setState({ passwordValue: value });
  }

  async handleLogin() {
    try {
      if (this.state.emailValid) {
        const reqBody = {
          email: this.state.emailValue,
          password: this.state.passwordValue,
        };
        const response = await Axios.post('/api/user/login', reqBody);
        if (response.status === 200) {
          localStorage.setItem('authed', 'true');
        } else {
          localStorage.setItem('authed', 'false');
          this.setState({ failSnackbarOpen: true, });
        }
        if (this.props.onAuthChange) {
          this.props.onAuthChange(response.status === 200);
        }
      }
    } catch (err) {
      console.log(err);
      this.setState({ failSnackbarOpen: true, });
    }
  }

  render() {
    const handleChange = name => event => {
      this.setState({ ...this.state, [name]: event.target.checked });
    };
    return (
      <div className="auth-container">
        <Paper className="login-form">
          <h1>Login</h1>
          <EmailTextField
            showError
            onChange={this.handleEmailField} />
          <PasswordTextField
            onChange={this.handlePasswordField} />
          <Typography>
            <Box textAlign="left"
              style={{}}>
              <FormControlLabel
                control={
                  <Checkbox checked={this.state.checkedRememberMe}
                    onChange={handleChange('checkedRememberMe')}
                    color="primary"
                    value="checkedRememberMe" />
                }
                label="Remember Me"
              />
            </Box>
          </Typography>
          <Button className="login-button"
            variant="contained"
            color="primary"
            style={{ margin: '20px 0' }}
            onClick={this.handleLogin}>
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
            message="Unable to login, please try again." />
        </Snackbar>
      </div>
    );
  }
}

Login.propTypes = {
  onAuthChange: PropTypes.func
};

export default Login;
