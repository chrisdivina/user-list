import React from 'react';
import Form from 'react-jsonschema-form';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { contactSchema } from '../schemas';
import { withContacts } from '../hoc';

const apiURL = process.env.REACT_APP_API_URL || '';

const onSubmit = ({ formData }) => {
  console.log(formData);
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

const ContactEdit = ({ match, contacts }) => {
  const { schema, uiSchema } = contactSchema;
  const contact = contacts.items[match.params.id];

  return (
    <div>
      <div>
        <Link to="/">
          Back
        </Link>
      </div>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
        formData={contact}
      />
    </div>
  );
};

ContactEdit.propTypes = {
  match: PropTypes.shape({}).isRequired,
  contacts: PropTypes.shape({}).isRequired
};

export default withContacts(ContactEdit);
