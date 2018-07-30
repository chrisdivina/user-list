import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, IconButton
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';

const styles = {
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

const SubBar = ({ classes, title }) => (
  <AppBar position="static" color="default">
    <Toolbar>
      <IconButton className={classes.menuButton} color="inherit">
        <Link className={classes.link} to="/">
          <ArrowBack />
        </Link>
      </IconButton>
      <Typography variant="title" color="inherit" className={classes.flex}>
        {title}
      </Typography>
    </Toolbar>
  </AppBar>
);

SubBar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles)(SubBar);
