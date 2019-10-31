import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AddIcon from '@material-ui/icons/Add';
import './Navbar.scss';

class Navbar extends Component {

  render() {
    return (
      <div>
        <AppBar position="static" className="app-bar">
          <Toolbar className="nav-toolbar">
            <IconButton edge="start" className="menu-button" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" >
              Dashboard
            </Typography>
            <div className="right">
              <IconButton aria-label="add">
                <AddIcon />
              </IconButton>
              <IconButton aria-label="profile">
                <AccountCircleIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Navbar;