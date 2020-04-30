import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography, IconButton } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => (
  <div>
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography varient="title" color="inherit">
          Let&#39;s Get This Job (Bread)
        </Typography>
      </Toolbar>
    </AppBar>
  </div>
);

export default NavBar;
