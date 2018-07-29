import React from 'react';
import Form from 'react-jsonschema-form';
import { Link } from 'react-router-dom';
import { contactSchema } from '../schemas';

const apiURL = process.env.REACT_APP_API_URL || '';

const onSubmit = ({ formData }) => {
  const { id, ...details } = formData;
  fetch(`${apiURL}/contacts`, {
    method: 'PUT',
    body: JSON.stringify({ ...details }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => console.log(err))
    .then(res => console.log(res));
};

const UserForm = () => {
  const { schema, uiSchema } = contactSchema;
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
      />
    </div>
  );
};

export default UserForm;
