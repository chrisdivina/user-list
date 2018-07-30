import React from 'react';
import { Route } from 'react-router-dom';
import ContactAdd from './ContactAdd';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactEdit from './ContactEdit';

const App = () => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center'
    }}
  >
    <Route exact path="/" component={ContactList} />
    <Route path="/add" component={ContactAdd} />
    <Route exact path="/contact/:id" component={ContactDetails} />
    <Route exact path="/contact/edit/:id" component={ContactEdit} />
  </div>
);

export default App;
