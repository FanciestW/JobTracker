import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Axios from 'axios';
import { AppBar, List, Toolbar, Typography, IconButton, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import DashboardIcon from '@material-ui/icons/Dashboard';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AssignmentIcon from '@material-ui/icons/Assignment';
import PeopleIcon from '@material-ui/icons/People';
import WorkIcon from '@material-ui/icons/Work';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import './Navbar.scss';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.handleToggleDrawer = this.handleToggleDrawer.bind(this);
    this.handleThemeToggle = this.handleThemeToggle.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleToggleDrawer() {
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  handleThemeToggle() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'light') {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    window.location.reload();
  }

  async handleLogOut() {
    await Axios.post('/api/user/logout');
    localStorage.setItem('authed', 'false');
    window.location.reload();
  }

  render() {
    const sideNav = (
      <div className="sideNav"
        role="presentation"
        onClick={this.handleToggleDrawer}
        onKeyDown={this.handleToggleDrawer}>
        <Router></Router>
        <List>
          <Link to="/dashboard" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon className="drawer-icon">
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText primary="Dashboard" />
            </ListItem>
          </Link>
          <Link to="/jobapps" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon className="drawer-icon">
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText primary="Job Applications" />
            </ListItem>
          </Link>
          <Link to="/interviews" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon className="drawer-icon">
                <PeopleIcon />
              </ListItemIcon>
              <ListItemText primary="Interviews" />
            </ListItem>
          </Link>
          <Link to="/jobs" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon className="drawer-icon">
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary="Job Listings" />
            </ListItem>
          </Link>
          <Link to="/profile" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon className="drawer-icon">
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="My Profile" />
            </ListItem>
          </Link>
        </List>
      </div>
    );
    let title = '';
    switch(this.props.location.pathname) {
      case '/dashboard': {
        title = 'Dashboard';
        break;
      }
      case '/jobapps': {
        title = 'Job Applications';
        break;
      }
      case '/interviews': {
        title = 'Interviews';
        break;
      }
      case '/jobs': {
        title = 'Job Listings';
        break;
      }
      case '/profile': {
        title = 'Profile';
        break;
      }
      default: {
        title = '';
        break;
      }
    }
    return (
      <div>
        <AppBar position="static" className="app-bar">
          <Toolbar className="nav-toolbar">
            <IconButton edge="start" className="menu-button" onClick={this.handleToggleDrawer} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >{title}</Typography>
            <SwipeableDrawer open={this.state.open} onOpen={this.handleToggleDrawer} onClose={this.handleToggleDrawer} className={'side-drawer'}>
              {sideNav}
            </SwipeableDrawer>
            <div className="right">
              <IconButton color="inherit" aria-label="add" onClick={this.handleThemeToggle}>
                <Brightness4Icon />
              </IconButton>
              <IconButton color="inherit" aria-label="Notifications">
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="profile">
                <AccountCircleIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="settings" onClick={this.handleLogOut}>
                <ExitToAppIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navbar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};

export default withRouter(Navbar);