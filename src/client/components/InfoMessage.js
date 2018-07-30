import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Snackbar } from '@material-ui/core';
import { withContacts } from '../hoc';

class InfoMessage extends Component {
  constructor() {
    super();
    this.handleClose = this.handleClose.bind(this);
  }

  handleClose() {
    const { onTerminateAction } = this.props;
    onTerminateAction();
  }

  render() {
    const { message, open } = this.props;

    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={open}
        autoHideDuration={3000}
        message={<span>{message}</span>}
        onClose={this.handleClose}
      />
    );
  }
}

InfoMessage.defaultProps = {
  open: false,
  message: ''
};

InfoMessage.propTypes = {
  open: PropTypes.bool,
  message: PropTypes.string,
  onTerminateAction: PropTypes.func.isRequired
};

export default withContacts(InfoMessage);
