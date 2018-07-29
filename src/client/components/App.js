import React from 'react';
import { Route } from 'react-router-dom';
import UserForm from './UserForm';
import ContactList from './ContactList';
import ContactDetails from './ContactDetails';
import ContactEdit from './ContactEdit';

const App = () => (
  <div className="App">
    <header className="App-header">
      <h1 className="App-title">
          Welcome to React
      </h1>
    </header>
    <p className="App-intro">
      To get started, edit
      <code>
        src/App.js
      </code>
      and save to reload.
    </p>
    <Route exact path="/" component={ContactList} />
    <Route path="/add" component={UserForm} />
    <Route exact path="/contact/:id" component={ContactDetails} />
    <Route exact path="/contact/edit/:id" component={ContactEdit} />
  </div>
);

export default App;
