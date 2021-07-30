import { useState } from 'react';
import { Filter } from './components/Filter';
import { Form } from './components/Form';
import { Persons } from './components/Persons';

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' },
  ]);

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
