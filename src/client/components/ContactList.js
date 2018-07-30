import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import ContactFilter from './ContactFilter';
import ContactItemList from './ContactItemList';
import AddButton from './AddButton';
import InfoMessage from './InfoMessage';
import Main from './Main';
import { withContacts } from '../hoc';

const ContactList = ({ isDeleted = false, isAdded = false }) => (
  <Fragment>
    <TopBar title="Contacts">
      <AddButton to="/add" />
    </TopBar>
    <Main>
      <ContactFilter />
      <ContactItemList />
    </Main>
    <InfoMessage
      open={isDeleted}
      message="The contact has been deleted"
    />
    <InfoMessage
      open={isAdded}
      message="The contact has been added"
    />
  </Fragment>
);

ContactList.defaultProps = {
  isDeleted: false,
  isAdded: false
};

ContactList.propTypes = {
  isDeleted: PropTypes.bool,
  isAdded: PropTypes.bool
};

export default withContacts(ContactList);
