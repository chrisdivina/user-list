import normalize from '../libs/normalize';

const REQUEST_CONTACTS = 'contacts/request';
const RECEIVED_CONTACTS = 'contacts/received';

const requestContacts = () => ({
  type: REQUEST_CONTACTS
});

const receivedContacts = (items, error) => ({
  type: RECEIVED_CONTACTS,
  items,
  error,
  timestamp: Date.now()
});

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
        timestamp: action.timestamp,
        error: action.error
      };
    default:
      return state;
  }
};
