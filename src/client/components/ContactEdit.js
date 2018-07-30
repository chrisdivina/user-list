import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import TopBar from './TopBar';
import Main from './Main';
import ContactItemEdit from './ContactItemEdit';
import { withContacts } from '../hoc';

const ContactEdit = ({ match, isUpdated = false }) => {
  if (isUpdated) {
    return <Redirect to={`/contact/${match.params.id}`} />;
  }

  return (
    <Fragment>
      <TopBar
        title="Edit Contact"
        backTo={`/contact/${match.params.id}`}
      />
      <Main>
        <ContactItemEdit contactId={match.params.id} />
      </Main>
    </Fragment>
  );
};

ContactEdit.defaultProps = {
  isUpdated: false
};

ContactEdit.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string
    })
  }).isRequired,
  isUpdated: PropTypes.bool
};

export default withContacts(ContactEdit);
