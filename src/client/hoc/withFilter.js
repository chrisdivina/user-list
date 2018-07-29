import React from 'react';
import { connect } from 'react-redux';
import { updateFilter, deleteFilter } from '../reducers/filter';

const withFilter = WrappedComponent => {
  const Filter = props => <WrappedComponent {...props} />;

  const mapStateToProps = state => {
    const { filter = '' } = state;
    return { filter };
  };

  const mapDispatchToProps = dispatch => ({
    onUpdateFilter: filter => dispatch(updateFilter(filter)),
    onDeleteFilter: () => dispatch(deleteFilter())
  });

  return connect(mapStateToProps, mapDispatchToProps)(Filter);
};

export default withFilter;
