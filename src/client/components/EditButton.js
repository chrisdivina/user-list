import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import { Edit } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  button: {
    marginLeft: 0,
    marginRight: -12
  },
  link: {
    display: 'flex'
  }
};

const EditButton = ({ to, classes }) => (
  <Link className={classes.link} to={to}>
    <IconButton className={classes.button} color="inherit" aria-label="Menu">
      <Edit />
    </IconButton>
  </Link>
);

EditButton.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  to: PropTypes.string.isRequired
};

export default withStyles(styles)(EditButton);
