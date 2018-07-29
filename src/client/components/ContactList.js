import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withContacts, withFilter } from '../hoc';

class ContactList extends PureComponent {
  constructor() {
    super();
    this.onFilter = this.onFilter.bind(this);
  }

  componentDidMount() {
    const { loadContacts } = this.props;
    loadContacts();
  }

  onFilter(e) {
    const { onUpdateFilter } = this.props;
    onUpdateFilter(e.target.value);
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
        <input
          type="text"
          onChange={this.onFilter}
        />
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
  contacts: PropTypes.arrayOf.isRequired,
  onUpdateFilter: PropTypes.func.isRequired
};

export default withFilter(withContacts(ContactList));
