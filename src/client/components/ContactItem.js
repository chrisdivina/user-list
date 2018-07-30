import React from 'react';
import PropTypes from 'prop-types';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import { Avatar, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { withFilter } from '../hoc';

const serverURL = process.env.REACT_APP_SERVER_URL || '';

const styles = {
  row: {
    display: 'flex',
    alignItems: 'center',
    textDecoration: 'none',
    '&:hover': {
      backgroundColor: '#eee',
      textDecoration: 'none'
    }
  },
  avatar: {
    margin: 10
  }
};

const ContactItem = ({
  classes, filter, id, item
}) => (
  <li>
    <Link
      className={classes.row}
      to={`/contact/${id}`}
    >
      <Avatar
        alt={item.name}
        src={`${serverURL}/avatars/${item.avatar || 'default.png'}`}
        className={classes.avatar}
      />
      <div>
        <Typography variant="subheading">
          {item.name}
        </Typography>
        {filter.length > 2 && item.match && item.match.length > 0 && (
          <Typography>
            {ReactHtmlParser(item.match)}
          </Typography>
        )}
      </div>
    </Link>
  </li>
);

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  item: PropTypes.shape({}).isRequired,
  filter: PropTypes.string.isRequired,
  classes: PropTypes.shape({}).isRequired
};

export default withFilter(withStyles(styles)(ContactItem));
