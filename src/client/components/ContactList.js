import React, { Fragment } from 'react';
import TopBar from './TopBar';
import ContactFilter from './ContactFilter';
import ContactItemList from './ContactItemList';
import AddButton from './AddButton';
import Main from './Main';

const ContactList = () => (
  <Fragment>
    <TopBar title="Contacts">
      <AddButton to="/add" />
    </TopBar>
    <Main>
      <ContactFilter />
      <ContactItemList />
    </Main>
  </Fragment>
);

export default ContactList;
