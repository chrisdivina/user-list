import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { ArrowBack } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    marginLeft: -12
  },
  link: {
    display: 'flex'
  }
};

const BackButton = ({ backTo, classes }) => (
  <IconButton className={classes.button} color="inherit">
    <Link className={classes.link} to={backTo}>
      <ArrowBack />
    </Link>
  </IconButton>
);

BackButton.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  backTo: PropTypes.string.isRequired
};

export default withStyles(styles)(BackButton);
