import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar, Typography, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import DetailsBlock from './DetailsBlock';
import DeleteConfirmationButton from './DeleteConfirmationButton';
import { withContacts } from '../hoc';
import { contactSchema } from '../schemas';

const serverURL = process.env.REACT_APP_SERVER_URL || '';

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: 20
  },
  bigAvatar: {
    width: 60,
    height: 60
  }
};

const ContactItemDetails = ({ contacts, classes, contactId }) => {
  const { schema } = contactSchema;
  const { items = {} } = contacts;
  const item = items[contactId];

  if (!item) {
    return <Redirect to="/" />;
  }

  const {
    id,
    name,
    avatar,
    match,
    ...rest
  } = item;

  const details = { ...rest };
  const {
    id: schemaId,
    name: schemaName,
    imageFile,
    ...properties
  } = schema.properties;
  const schemaProps = { ...properties };

  return (
    <div className={classes.root}>
      <Avatar
        alt={name}
        src={`${serverURL}/avatars/${item.avatar || 'default.png'}`}
        className={classes.bigAvatar}
      />
      <Typography variant="headline">
        {name}
      </Typography>
      <List>
        {Object.keys(schemaProps).map(key => (
          <DetailsBlock
            key={key}
            property={schemaProps[key]}
            value={details[key]}
          />
        ))}
      </List>
      <DeleteConfirmationButton id={id} />
    </div>
  );
};

ContactItemDetails.propTypes = {
  classes: PropTypes.oneOfType([PropTypes.object]).isRequired,
  contactId: PropTypes.string.isRequired,
  contacts: PropTypes.shape({
    items: PropTypes.object,
    itemsById: PropTypes.array
  }).isRequired
};

export default withContacts(withStyles(styles)(ContactItemDetails));
