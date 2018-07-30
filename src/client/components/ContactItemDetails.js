import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withContacts } from '../hoc';
import { contactSchema } from '../schemas';

const apiURL = process.env.REACT_APP_API_URL || '';
const serverURL = process.env.REACT_APP_SERVER_URL || '';

const onDelete = id => {
  fetch(`${apiURL}/contacts/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch(err => console.log(err))
    .then(res => console.log(res));
};

const ContactItemDetails = ({ contacts, contactId }) => {
  const { schema } = contactSchema;
  const { items = {} } = contacts;
  const item = items[contactId];

  const {
    id,
    name,
    avatar,
    match,
    ...rest
  } = item;

  const details = { ...rest };

  return (
    <Fragment>
      <h1>{name}</h1>
      <img src={`${serverURL}/avatars/${avatar}`} alt={name} />
      {Object.keys(schema.properties).map(key => (
        <div key={key}>
          <h2>{schema.properties[key].title}</h2>
          {schema.properties[key].properties
            && Object.keys(schema.properties[key].properties).map(subKey => (
              <div key={subKey}>
                <h3>{schema.properties[key].properties[subKey].title}</h3>
                <p>{(details[key] && details[key][subKey]) || ''}</p>
              </div>
            ))}
          {!schema.properties[key].properties && <p>{details[key] || ''}</p>}
        </div>
      ))}
      <button onClick={() => onDelete(id)}>Delete</button>
    </Fragment>
  );
};

ContactItemDetails.propTypes = {
  contactId: PropTypes.string.isRequired,
  contacts: PropTypes.shape({
    items: PropTypes.object,
    itemsById: PropTypes.array
  }).isRequired
};

export default withContacts(ContactItemDetails);
