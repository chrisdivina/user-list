import React, { Component } from 'react';
import Form from 'react-jsonschema-form';
import PropTypes from 'prop-types';
import { contactSchema } from '../schemas';
import { withContacts } from '../hoc';

class ContactItemEdit extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ formData }) {
    const { id, ...details } = formData;
    const { onUpdateContact } = this.props;
    onUpdateContact(id, { ...details });
  }

  render() {
    const { contactId, contacts, isFetching = false } = this.props;
    const { schema, uiSchema } = contactSchema;
    const contact = contacts.items[contactId];

    if (isFetching) {
      return null;
    }

    return (
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onSubmit={this.onSubmit}
        formData={contact}
      />
    );
  }
}

ContactItemEdit.defaultProps = {
  isFetching: false
};

ContactItemEdit.propTypes = {
  contactId: PropTypes.string.isRequired,
  contacts: PropTypes.shape({
    itemsById: PropTypes.array,
    items: PropTypes.object
  }).isRequired,
  onUpdateContact: PropTypes.func.isRequired,
  isFetching: PropTypes.bool
};

export default withContacts(ContactItemEdit);
