import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  AppBar, Toolbar, Typography, LinearProgress
} from '@material-ui/core';
import GhostIcon from './GhostIcon';
import BackButton from './BackButton';
import { withContacts } from '../hoc';

const styles = {
  root: {
    flex: '1 1 100%'
  },
  bar: {
    justifyContent: 'center'
  },
  flex: {
    margin: 'auto'
  }
};


const TopBar = ({
  classes, title, backTo = null, isFetching = true, children = null
}) => (
  <div className={classes.root}>

    <AppBar
      position="static"
      color="default"
    >

      <Toolbar className={classes.bar}>
        {backTo && <BackButton backTo={backTo} />}
        {!backTo && <GhostIcon />}

        <Typography variant="title" color="inherit" className={classes.flex}>
          {title}
        </Typography>

        {!children && <GhostIcon isRight />}
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
