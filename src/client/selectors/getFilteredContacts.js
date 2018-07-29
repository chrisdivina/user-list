import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getFilter = state => state.filter;

export default createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (filter.length === 0) {
      return contacts;
    }
    const { items } = contacts;
    const itemsById = contacts.itemsById.filter(contactId => {
      const { id, avatar, ...details } = contacts.items[contactId];
      const contact = { ...details };
      return Object.keys(contact).some(key => {
        if (contact[key].includes(filter)) {
          items[contactId].match = contact[key].replace(filter, `<em>${filter}</em>`);
          return true;
        }
        return false;
      });
    });

    return {
      itemsById,
      items
    };
  }
);
