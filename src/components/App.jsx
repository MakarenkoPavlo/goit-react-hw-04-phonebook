import React, { useState } from 'react';
import { nanoid } from 'nanoid'; 
import ContactForm from './ContactForm'; 
import ContactList from './ContactList';
import Filter from './Filter';
import styles from './App.module.css';


function App() {
  const [contacts, setContacts] = useState([]); 
  const [filter, setFilter] = useState('');

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleDeleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onAddContact={handleAddContact} contacts={contacts} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={handleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
}

export default App;