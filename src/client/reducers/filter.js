const UPDATE_FILTER = 'filter/update';
const DELETE_FILTER = 'filter/delete';

export const updateFilter = filter => ({
  type: UPDATE_FILTER,
  filter
});

export const deleteFilter = () => ({
  type: DELETE_FILTER
});

export default (state = '', action) => {
  switch (action.type) {
    case UPDATE_FILTER:
      return action.filter;
    case DELETE_FILTER:
      return '';
    default:
      return state;
  }
};
