import React from 'react';
import PropTypes from 'prop-types';
import { withContacts } from '../hoc';

const Main = ({ isFetching = true, children = null }) => {
  if (isFetching) {
    return null;
  }

  return (
    <div style={{ flex: '0 1 960px', justifyContent: 'center', margin: '20px' }}>
      {children}
    </div>
  );
};

Main.defaultProps = {
  isFetching: true,
  children: null
};

Main.propTypes = {
  isFetching: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

export default withContacts(Main);
