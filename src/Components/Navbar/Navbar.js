import React, { Component } from 'react';
import { AppBar, List, Toolbar, Typography, IconButton, ListItem, ListItemIcon, ListItemText, SwipeableDrawer } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import SettingsIcon from '@material-ui/icons/Settings';
import NotificationsIcon from '@material-ui/icons/Notifications';
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
  }

  handleToggleDrawer() {
    if (this.state.open) {
      this.setState({ open: false });
    } else {
      this.setState({ open: true });
    }
  }

  render() {
    const sideNav = (
      <div className="sideNav"
        role="presentation"
        onClick={this.handleToggleDrawer}
        onKeyDown={this.handleToggleDrawer}>
        <Router></Router>
        <List>
          <Link to="/test" style={{ color: 'inherit', textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon className="drawer-icon">
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Test" />
            </ListItem>
          </Link>
          {/* {titles.map((text, index) => (
            <Link to={links[index]}
              key={index}
              style={{ color: 'white', textDecoration: 'none' }}>
              <ListItem button className={'drawer-list-item'}>
                <ListItemIcon className={'drawer-icon'}>{icons[index]}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </Link>
          ))} */}
        </List>
      </div>
    );
    return (
      <div>
        <AppBar position="static" className="app-bar">
          <Toolbar className="nav-toolbar">
            <IconButton edge="start" className="menu-button" onClick={this.handleToggleDrawer} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              Dashboard
            </Typography>
            <SwipeableDrawer open={this.state.open} onOpen={this.handleToggleDrawer} onClose={this.handleToggleDrawer} className={'side-drawer'}>
              {sideNav}
            </SwipeableDrawer>
            <div className="right">
              <IconButton color="inherit" aria-label="add">
                <AddIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="Notifications">
                <NotificationsIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="profile">
                <AccountCircleIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="settings">
                <SettingsIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withRouter(Navbar);