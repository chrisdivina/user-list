import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { IconButton } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  hidden: {
    marginLeft: -12,
    visibility: 'hidden'
  },
  hiddenRight: {
    marginRight: -12
  }
};

const GhostIcon = ({ isRight = false, classes }) => (
  <IconButton className={
    classNames(
      classes.hidden,
      { [classes.hiddenRight]: isRight }
    )
  }
  />
);

GhostIcon.defaultProps = {
  isRight: false
};

GhostIcon.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  isRight: PropTypes.bool
};

export default withStyles(styles)(GhostIcon);
