import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  FormControl, InputLabel, Input, InputAdornment, IconButton
} from '@material-ui/core';
import { Clear } from '@material-ui/icons';
import { withFilter } from '../hoc';

const styles = theme => ({
  root: {
    display: 'flex',
    margin: theme.spacing.unit
  }
});

class ContactFilter extends PureComponent {
  constructor() {
    super();
    this.onFilter = this.onFilter.bind(this);
    this.onClearFilter = this.onClearFilter.bind(this);
  }

  onFilter(e) {
    const { onUpdateFilter } = this.props;
    onUpdateFilter(e.target.value);
  }

  onClearFilter() {
    const { onDeleteFilter } = this.props;
    onDeleteFilter();
  }

  render() {
    const { classes, filter } = this.props;

    return (
      <FormControl className={classes.root}>
        <InputLabel htmlFor="adornment-password">Filter</InputLabel>
        <Input
          onChange={this.onFilter}
          value={filter}
          endAdornment={(
            <InputAdornment position="end">
              <IconButton
                aria-label="Clear filter"
                onClick={this.onClearFilter}
              >
                <Clear />
              </IconButton>
            </InputAdornment>
          )}
        />
      </FormControl>
    );
  }
}

ContactFilter.propTypes = {
  onUpdateFilter: PropTypes.func.isRequired,
  onDeleteFilter: PropTypes.func.isRequired,
  classes: PropTypes.shape({}).isRequired,
  filter: PropTypes.string.isRequired
};

export default withFilter(withStyles(styles)(ContactFilter));
