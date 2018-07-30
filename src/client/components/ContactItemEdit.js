import React from 'react';
import Form from 'react-jsonschema-form';
import PropTypes from 'prop-types';
import { contactSchema } from '../schemas';
import { withContacts } from '../hoc';

const apiURL = process.env.REACT_APP_API_URL || '';

const onSubmit = ({ formData }) => {
  const { id, ...details } = formData;
  fetch(`${apiURL}/contacts/${id}`, {
    method: 'POST',
    body: JSON.stringify({ ...details }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err))
    .then(res => console.log(res));
};

const ContactItemEdit = ({ contactId, contacts }) => {
  const { schema, uiSchema } = contactSchema;
  const contact = contacts.items[contactId];

  return (
    <Form
      schema={schema}
      uiSchema={uiSchema}
      onSubmit={onSubmit}
      formData={contact}
    />
  );
};

ContactItemEdit.propTypes = {
  contactId: PropTypes.string.isRequired,
  contacts: PropTypes.shape({
    itemsById: PropTypes.array,
    items: PropTypes.object
  }).isRequired
};

export default withContacts(ContactItemEdit);
