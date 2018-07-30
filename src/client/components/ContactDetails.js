import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import EditButton from './EditButton';
import Main from './Main';
import ContactItemDetails from './ContactItemDetails';
import InfoMessage from './InfoMessage';
import { withContacts } from '../hoc';

const ContactDetails = ({ match, isUpdated = false }) => (
  <Fragment>
    <TopBar title="Contact Details" backTo="/">
      <EditButton to={`/contact/edit/${match.params.id}`} />
    </TopBar>
    <Main>
      <ContactItemDetails contactId={match.params.id} />
    </Main>
    <InfoMessage
      open={isUpdated}
      message="The contact has been updated"
    />
  </Fragment>
);

ContactDetails.defaultProps = {
  isUpdated: false
};

ContactDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  isUpdated: PropTypes.bool
};

export default withContacts(ContactDetails);
