import React from 'react';
import shortid from 'shortid';
import ContactForm from './Components/Form/Form';
import ContactsList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

import './App.css';

class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(i => i.id !== id),
    }));
  };

  changeFilter = e => {
    const value = e.currentTarget.value;
    this.setState({ filter: value });
  };

  onFilter = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(id =>
      id.name.toLowerCase().includes(normalizedFilter),
    );
  };

  addContact = ({ name, number }) => {
    const { contacts } = this.state;
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    contacts.some(id => id.name === name)
      ? alert(`${name} is already in contacts`)
      : this.setState(({ contacts }) => ({
          contacts: [contact, ...contacts],
        }));
  };

  render() {
    const contacts = this.onFilter();
    const { filter } = this.state;
    return (
      <div className="Container">
        <h1 className="title">Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2 className="title">Contacts</h2>
        <Filter value={filter} onChange={this.changeFilter} />
        <ContactsList contacts={contacts} onDeleteClick={this.deleteContact} />
      </div>
    );
  }
}

export default App;
