import React from 'react';
import shortid from 'shortid';
import ContactForm from './Components/Form/Form';
import ContactsList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';

import './App.css';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));
    if (contacts) {
      this.setState({
        contacts: contacts,
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    }
  }

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
