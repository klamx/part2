import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
      number: '040-1234567',
    },
  ]);

  const [newPerson, setNewPerson] = useState({ name: '', number: '' });

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
        {persons.map((person) => {
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
