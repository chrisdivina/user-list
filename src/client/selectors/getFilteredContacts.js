import { createSelector } from 'reselect';

const getContacts = state => state.contacts;
const getFilter = state => state.filter;

export default createSelector(
  [getContacts, getFilter],
  (contacts, filter) => {
    if (filter.length < 3) {
      return contacts;
    }
    const { items } = contacts;
    const itemsById = contacts.itemsById.filter(contactId => {
      const { id, avatar, ...details } = contacts.items[contactId];
      const contact = { ...details };
      return Object.keys(contact).some(key => {
        if (typeof contact[key] === 'object') {
          return Object.keys(contact[key]).some(subKey => {
            if (contact[key][subKey].toLowerCase().includes(filter.toLowerCase())) {
              items[contactId].match = contact[key][subKey].replace(filter, `<b>${filter}</b>`);
              return true;
            }
            return false;
          });
        } else if (contact[key].toLowerCase().includes(filter.toLowerCase())) {
          items[contactId].match = contact[key].replace(filter, `<b>${filter}</b>`);
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
