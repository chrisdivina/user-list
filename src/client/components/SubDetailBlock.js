import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from '@material-ui/core';

const SubDetailBlock = ({ title, value = '' }) => (
  <ListItem>
    <ListItemText
      primary={title}
      secondary={value}
    />
  </ListItem>
);

SubDetailBlock.defaultProps = {
  value: ''
};

SubDetailBlock.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default SubDetailBlock;
