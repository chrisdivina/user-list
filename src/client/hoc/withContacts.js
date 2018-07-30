import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getContacts } from '../reducers/contacts';
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
    const { isFetching = true } = contacts;
    return {
      contacts: getFilteredContacts(state),
      isFetching
    };
  };

  const mapDispatchToProps = dispatch => ({
    loadContacts: () => dispatch(getContacts())
  });

  return connect(mapStateToProps, mapDispatchToProps)(Contacts);
};

export default withContacts;
