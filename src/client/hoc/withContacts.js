import React from 'react';
import { connect } from 'react-redux';
import { getContacts } from '../reducers/contacts';
import { getFilteredContacts } from '../selectors';

const withContacts = WrappedComponent => {
  const Contacts = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => {
    const { contacts = {} } = state;
    const { isFetching = true } = contacts;
    return {
      contacts: {
        items: contacts.items,
        itemsById: getFilteredContacts(state)
      },
      areContactsFetching: isFetching
    };
  };

  const mapDispatchToProps = dispatch => ({
    loadContacts: () => dispatch(getContacts())
  });

  return connect(mapStateToProps, mapDispatchToProps)(Contacts);
};

export default withContacts;
