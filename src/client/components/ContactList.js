import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import ReactHtmlParser from 'react-html-parser';
import { withContacts, withFilter } from '../hoc';
import TopBar from './TopBar';
import ContactFilter from './ContactFilter';

class ContactList extends PureComponent {
  componentDidMount() {
    const { loadContacts } = this.props;
    loadContacts();
  }

  render() {
    const { areContactsFetching, contacts, filter } = this.props;
    const { itemsById, items } = contacts;

    return (
      <div>
        <TopBar />
        <ContactFilter />
        {!areContactsFetching
          && (
            <ul>
              { itemsById.map(id => (
                <li key={id}>
                  <Link to={`/contact/${id}`}>
                    {items[id].name}
                  </Link>
                  {filter && items[id].match && items[id].match.length > 0
                    && <p>{ReactHtmlParser(items[id].match)}</p>
                  }
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
  filter: PropTypes.string.isRequired
};

export default withFilter(withContacts(ContactList));
