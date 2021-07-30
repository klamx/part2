import { useState } from 'react';

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
      <div>
        filter shown with:{' '}
        <input type='text' value={filter} onChange={handleFilter} />
      </div>
      <h2>Add a new</h2>
      <form onSubmit={addPerson}>
        <div>
          <div>
            name:{' '}
            <input
              type='text'
              value={newPerson.name}
              onChange={handleNewPerson}
              name='name'
            />
          </div>
          <div>
            number:{' '}
            <input
              type='text'
              value={newPerson.number}
              onChange={handleNewPerson}
              name='number'
            />
          </div>
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {filter !== ''
          ? filteredPersons.map((person) => {
              return (
                <div key={person.name}>
                  {person.name} {person.number}
                </div>
              );
            })
          : persons.map((person) => {
              return (
                <div key={person.name}>
                  {person.name} {person.number}
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;
