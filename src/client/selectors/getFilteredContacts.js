import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getFilter = state => state.filter;

export default createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (filter.length === 0) {
      return contacts.itemsById;
    }
    return contacts.itemsById.filter(contactId => {
      const { id, avatar, ...details } = contacts.items[contactId];
      const contact = { ...details };
      return Object.keys(contact).some(key => contact[key].includes(filter));
    });
  }
);
