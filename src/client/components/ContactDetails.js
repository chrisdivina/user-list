import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { contactSchema } from '../schemas';
import { withContacts } from '../hoc';

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

const ContactDetails = ({ match, contacts }) => {
  const { schema } = contactSchema;
  const contact = contacts.items[match.params.id];
  const {
    id,
    name,
    avatar,
    ...rest
  } = contact;

  const details = { ...rest };

  return (
    <div>
      <Link to={`/contact/edit/${id}`}>Edit</Link>
      <button onClick={() => onDelete(id)}>Delete</button>
      <h1>{name}</h1>
      <img src={`${serverURL}/avatars/${avatar}`} alt={name} />
      {Object.keys(details).map(key => (
        <div>
          <h2>{schema.properties[key].title}</h2>
          <p>{details[key]}</p>
        </div>
      ))}
    </div>
  );
};

ContactDetails.propTypes = {
  match: PropTypes.shape({}).isRequired,
  contacts: PropTypes.shape({}).isRequired
};

export default withContacts(ContactDetails);
