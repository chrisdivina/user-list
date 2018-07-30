import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, IconButton, LinearProgress
} from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { withContacts } from '../hoc';

const styles = {
  root: {
    flex: '1 1 100%'
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  toolButton: {
    marginLeft: 0,
    marginRight: -12
  },
  link: {
    display: 'flex'
  }
};

const TopBar = ({
  classes, title, backTo = null, isFetching = true, children = null
}) => (
  <div className={classes.root}>
    <AppBar position="static" color="default">
      <Toolbar>
        {backTo && (
          <IconButton className={classes.menuButton} color="inherit">
            <Link className={classes.link} to={backTo}>
              <ArrowBack />
            </Link>
          </IconButton>
        )}
        <Typography variant="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>
        {children}
      </Toolbar>
    </AppBar>
    {isFetching && <LinearProgress color="secondary" />}
  </div>
);

TopBar.defaultProps = {
  backTo: null,
  isFetching: true,
  children: null
};

TopBar.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  backTo: PropTypes.string,
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]).isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  isFetching: PropTypes.bool
};

export default withContacts(withStyles(styles)(TopBar));
