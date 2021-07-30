import { useEffect, useState } from 'react';
import axios from 'axios';
import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { Persons } from './components/Persons';

function App() {
  const [persons, setPersons] = useState([]);

  const [newPerson, setNewPerson] = useState({ name: '', number: '' });
  const [filter, setFilter] = useState('');
  const [filteredPersons, SetfilteredPersons] = useState([]);

  // Filtrar persona
  const handleFilter = (e) => {
    setFilter(e.target.value);
    SetfilteredPersons(
      persons.filter((contact) => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };

  // Añadir persona
  const addPerson = (e) => {
    e.preventDefault();
    if (persons.some((person) => person.name === newPerson.name)) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
    setPersons([...persons, newPerson]);
    setNewPerson({ name: '', number: '' });
  };

  const handleNewPerson = (e) => {
    setNewPerson({ ...newPerson, [e.target.name]: e.target.value });
  };

  // llamado al server
  useEffect(() => {
    const url = 'http://localhost:3001/persons';
    axios.get(url).then((response) => {
      setPersons(response.data);
    });
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add a new</h2>
      <Form
        addPerson={addPerson}
        handleNewPerson={handleNewPerson}
        newPerson={newPerson}
      />
      <h2>Numbers</h2>
      <Persons
        filter={filter}
        filteredPersons={filteredPersons}
        persons={persons}
      />
    </div>
  );
}

export default App;
