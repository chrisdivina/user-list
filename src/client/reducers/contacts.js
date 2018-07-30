import normalize from '../libs/normalize';

const REQUEST_CONTACTS = 'contacts/request';
const RECEIVED_CONTACTS = 'contacts/received';
const DELETED_CONTACT = 'contact/deleted';
const ADDED_CONTACT = 'contact/add';
const UPDATED_CONTACT = 'contact/updated';
const TERMINATE_CONTACT_ACTION = 'contact/terminate_action';

const requestContacts = () => ({
  type: REQUEST_CONTACTS
});

const receivedContacts = (items, error) => ({
  type: RECEIVED_CONTACTS,
  items,
  error
});

const deletedContact = (items, error) => ({
  type: DELETED_CONTACT,
  items,
  error
});

const addedContact = (items, error) => ({
  type: ADDED_CONTACT,
  items,
  error
});

const updatedContact = (items, error) => ({
  type: UPDATED_CONTACT,
  items,
  error
});

export const terminateAction = () => ({
  type: TERMINATE_CONTACT_ACTION
});

export const updateContact = (id, details) => (dispatch, getState, api) => {
  let error = null;
  dispatch(requestContacts());
  fetch(`${api}/contacts/${id}`, {
    method: 'POST',
    body: JSON.stringify(details),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => { error = err; })
    .then(items => dispatch(updatedContact(items, error)));
};

export const addContact = details => (dispatch, getState, api) => {
  let error = null;
  dispatch(requestContacts());
  fetch(`${api}/contacts`, {
    method: 'PUT',
    body: JSON.stringify(details),
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(res => res.json())
    .catch(err => { error = err; })
    .then(items => dispatch(addedContact(items, error)));
};

export const deleteContact = id => (dispatch, getState, api) => {
  let error = null;
  dispatch(requestContacts());
  fetch(`${api}/contacts/${id}`, {
    method: 'DELETE'
  })
    .then(res => res.json())
    .catch(err => { error = err; })
    .then(items => dispatch(deletedContact(items, error)));
};

export const getContacts = () => (dispatch, getState, api) => {
  let error = null;
  dispatch(requestContacts());
  fetch(`${api}/contacts`)
    .then(res => res.json())
    .catch(err => { error = err; })
    .then(items => dispatch(receivedContacts(items, error)));
};

export default (state = {}, action) => {
  switch (action.type) {
    case REQUEST_CONTACTS:
      return {
        ...state,
        isFetching: true
      };
    case RECEIVED_CONTACTS:
      return {
        ...state,
        items: normalize(action.items),
        itemsById: action.items.map(item => item.id),
        isFetching: false,
        error: action.error
      };
    case DELETED_CONTACT:
      return {
        ...state,
        items: normalize(action.items),
        itemsById: action.items.map(item => item.id),
        isFetching: false,
        isDeleted: true,
        error: action.error
      };
    case ADDED_CONTACT:
      return {
        ...state,
        items: normalize(action.items),
        itemsById: action.items.map(item => item.id),
        isFetching: false,
        isAdded: true,
        error: action.error
      };
    case UPDATED_CONTACT:
      return {
        ...state,
        items: normalize(action.items),
        itemsById: action.items.map(item => item.id),
        isFetching: false,
        isUpdated: true,
        error: action.error
      };
    case TERMINATE_CONTACT_ACTION:
      return {
        ...state,
        isDeleted: false,
        isUpdated: false,
        isAdded: false
      };
    default:
      return state;
  }
};
