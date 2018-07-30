import React, { Fragment } from 'react';
import Form from 'react-jsonschema-form';
import { contactSchema } from '../schemas';
import SubBar from './SubBar';
import 'bootstrap/dist/css/bootstrap.css';

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

const ContactAdd = () => {
  const { schema, uiSchema } = contactSchema;
  return (
    <Fragment>
      <SubBar title="Add New Contact" />
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={onSubmit}
      />
    </Fragment>
  );
};

export default ContactAdd;
