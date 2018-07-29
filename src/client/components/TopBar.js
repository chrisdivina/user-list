import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, IconButton
} from '@material-ui/core';
import { AddCircle } from '@material-ui/icons';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  link: {
    display: 'flex'
  }
};

const TopBar = ({ classes }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.flex}>
        Contacts
      </Typography>
      <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
        <Link className={classes.link} to="/add">
          <AddCircle />
        </Link>
      </IconButton>
    </Toolbar>
  </AppBar>
);

TopBar.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(TopBar);
