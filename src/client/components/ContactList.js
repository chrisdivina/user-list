import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withContacts } from '../hoc';

class ContactList extends PureComponent {
  componentDidMount() {
    const { loadContacts } = this.props;
    loadContacts();
  }


  render() {
    const { areContactsFetching, contacts } = this.props;
    const { itemsById, items } = contacts;

    return (
      <div>
        <p>
          <Link to="/add">
            Add new contact
          </Link>
        </p>
        {!areContactsFetching
          && (
            <ul>
              { itemsById.map(id => (
                <li key={id}>
                  <Link to={`/contact/${id}`}>
                    {items[id].name}
                  </Link>
                </li>
              ))}
            </ul>
          )
        }
      </div>
    );
  }
}

ContactList.propTypes = {
  loadContacts: PropTypes.func.isRequired,
  areContactsFetching: PropTypes.bool.isRequired,
  contacts: PropTypes.arrayOf.isRequired
};

export default withContacts(ContactList);
