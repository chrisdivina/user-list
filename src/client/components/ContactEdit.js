import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import Main from './Main';
import ContactItemEdit from './ContactItemEdit';

const ContactEdit = ({ match }) => (
  <Fragment>
    <TopBar
      title="Edit Contact"
      backTo={`/contact/${match.params.id}`}
    />
    <Main style={{ margin: '10px' }}>
      <ContactItemEdit contactId={match.params.id} />
    </Main>
  </Fragment>
);

ContactEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired
};

export default ContactEdit;
