import React from 'react';
import { Route } from 'react-router-dom';
import UserForm from './UserForm';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactEdit from './ContactEdit';

const App = () => (
  <div className="App">
    <Route exact path="/" component={ContactList} />
    <Route path="/add" component={UserForm} />
    <Route exact path="/contact/:id" component={ContactDetails} />
    <Route exact path="/contact/edit/:id" component={ContactEdit} />
  </div>
);

export default App;
