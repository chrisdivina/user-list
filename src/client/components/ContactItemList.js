import React from 'react';
import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
import { withContacts } from '../hoc';

const ContactItemList = ({ contacts = {} }) => {
  const { itemsById = [], items = {} } = contacts;
  const styles = {
    listStyle: 'none',
    paddingLeft: 0
  };

  return (
    <ul style={styles}>
      { itemsById.map(id => (
        <ContactItem
          key={id}
          id={id}
          item={items[id]}
        />
      ))}
    </ul>
  );
};

ContactItemList.defaultProps = {
  contacts: {
    items: {},
    itemsById: []
  }
};

ContactItemList.propTypes = {
  contacts: PropTypes.shape({
    items: PropTypes.object,
    itemsById: PropTypes.array
  })
};

export default withContacts(ContactItemList);
