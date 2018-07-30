import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import EditButton from './EditButton';
import Main from './Main';
import ContactItemDetails from './ContactItemDetails';

const ContactDetails = ({ match }) => (
  <Fragment>
    <TopBar
      title="Contact Details"
      backTo="/"
    >
      <EditButton to={`/contact/edit/${match.params.id}`} />
    </TopBar>
    <Main>
      <ContactItemDetails
        contactId={match.params.id}
      />
    </Main>
  </Fragment>
);

ContactDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default ContactDetails;
