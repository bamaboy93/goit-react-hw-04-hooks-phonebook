import { useState } from 'react';
import shortid from 'shortid';
import ContactForm from './Components/Form/Form';
import ContactsList from './Components/ContactList/ContactList';
import Filter from './Components/Filter/Filter';
import useLocalStorage from './hooks/useLocalStorage';
import './App.css';

const App = () => {
  const [contacts, setContacts] = useLocalStorage('contacts', '');
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name,
      number,
    };
    setContacts(prevState => [...prevState, contact]);
  };

  const deleteContact = contactID => {
    setContacts(contacts.filter(({ id }) => id !== contactID));
  };

  const changeFilter = filter => {
    setFilter(filter);
  };

  const onFilter = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter),
    );
  };

  const filteredContacts = onFilter();

  return (
    <div className="Container">
      <h1 className="title">Phonebook</h1>
      <ContactForm onSubmit={addContact} />
      <h2 className="title">Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactsList contacts={filteredContacts} onDeleteClick={deleteContact} />
    </div>
  );
};

export default App;
