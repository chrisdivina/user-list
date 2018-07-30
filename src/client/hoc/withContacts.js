import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  getContacts, deleteContact, terminateAction, addContact, updateContact
} from '../reducers/contacts';
import { getFilteredContacts } from '../selectors';

const withContacts = WrappedComponent => {
  class Contacts extends PureComponent {
    componentDidMount() {
      const { loadContacts, contacts } = this.props;
      if (!contacts.items) {
        loadContacts();
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  Contacts.propTypes = {
    contacts: PropTypes.shape({}).isRequired,
    loadContacts: PropTypes.func.isRequired
  };

  const mapStateToProps = state => {
    const { contacts = {} } = state;
    const {
      isFetching = true,
      isDeleted = false,
      isAdded = false,
      isUpdated = false
    } = contacts;
    return {
      contacts: getFilteredContacts(state),
      isFetching,
      isDeleted,
      isAdded,
      isUpdated
    };
  };

  const mapDispatchToProps = dispatch => ({
    loadContacts: () => dispatch(getContacts()),
    onDeleteContact: id => dispatch(deleteContact(id)),
    onTerminateAction: () => dispatch(terminateAction()),
    onAddContact: details => dispatch(addContact(details)),
    onUpdateContact: (id, details) => dispatch(updateContact(id, details))
  });

  return connect(mapStateToProps, mapDispatchToProps)(Contacts);
};

export default withContacts;
