import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Form from 'react-jsonschema-form';
import { contactSchema } from '../schemas';
import TopBar from './TopBar';
import Main from './Main';
import { withContacts } from '../hoc';
import 'bootstrap/dist/css/bootstrap.css';

class ContactAdd extends Component {
  constructor() {
    super();
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit({ formData }) {
    const { onAddContact } = this.props;
    const { id, ...details } = formData;
    onAddContact({ ...details });
  }

  render() {
    const { schema, uiSchema } = contactSchema;
    const { isAdded = false, isFetching = false } = this.props;

    if (isAdded) {
      return <Redirect to="/" />;
    }

    return (
      <Fragment>
        <TopBar title="Add New Contact" backTo="/" />
        {!isFetching && (
          <Main>
            <Form
              schema={schema}
              uiSchema={uiSchema}
              onSubmit={this.onSubmit}
            />
          </Main>
        )}
      </Fragment>
    );
  }
}

ContactAdd.defaultProps = {
  isAdded: false,
  isFetching: false
};

ContactAdd.propTypes = {
  onAddContact: PropTypes.func.isRequired,
  isAdded: PropTypes.bool,
  isFetching: PropTypes.bool
};

export default withContacts(ContactAdd);
