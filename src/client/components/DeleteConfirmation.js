import React from 'react';
import PropTypes from 'prop-types';
import {
  Dialog, DialogTitle, DialogActions, Button
} from '@material-ui/core';

const DeleteConfirmation = ({ open, onClose, onConfirm }) => (
  <Dialog
    open={open}
    onClose={onClose}
  >
    <DialogTitle>Are you sure you want to delete this contact?</DialogTitle>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={onConfirm} color="secondary" autoFocus>
        Delete
      </Button>
    </DialogActions>
  </Dialog>
);

DeleteConfirmation.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onConfirm: PropTypes.func.isRequired
};

export default DeleteConfirmation;
