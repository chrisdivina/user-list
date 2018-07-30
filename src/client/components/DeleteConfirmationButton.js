import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import { Delete } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import DeleteConfirmation from './DeleteConfirmation';
import { withContacts } from '../hoc';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  rightIcon: {
    marginLeft: theme.spacing.unit
  }
});

class DeleteConfirmationButton extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.state = { open: false };
  }

  onDelete() {
    const { onDeleteContact, id } = this.props;
    this.toggle();
    onDeleteContact(id);
  }

  toggle() {
    const { open } = this.state;
    this.setState({ open: !open });
  }

  render() {
    const { classes } = this.props;
    const { open } = this.state;

    return (
      <Fragment>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          onClick={this.toggle}
        >
          Delete
          <Delete className={classes.rightIcon} />
        </Button>
        <DeleteConfirmation
          open={open}
          onClose={this.toggle}
          onConfirm={this.onDelete}
        />
      </Fragment>
    );
  }
}

DeleteConfirmationButton.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  id: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired
};

export default withContacts(withStyles(styles)(DeleteConfirmationButton));
