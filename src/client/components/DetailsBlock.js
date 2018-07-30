import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  List, ListItem, ListItemText, Divider
} from '@material-ui/core';

const DetailsBlock = ({ property, value = '' }) => (
  <Fragment>
    <ListItem>
      <ListItemText
        primary={property.title}
        secondary={typeof value === 'string' ? value : ''}
      />
      {property.properties && (
        <List>
          {Object.keys(property.properties).map(key => (
            <ListItem key={key}>
              <ListItemText
                primary={property.properties[key].title}
                secondary={value[key]}
              />
            </ListItem>
          ))}
        </List>
      )}
    </ListItem>
    <Divider light component="li" />
  </Fragment>
);

DetailsBlock.defaultProps = {
  value: ''
};

DetailsBlock.propTypes = {
  property: PropTypes.oneOfType([PropTypes.object]).isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
};

export default DetailsBlock;
