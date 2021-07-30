import { useState } from 'react';

function App() {
  const [persons, setPersons] = useState([
    {
      name: 'Arto Hellas',
    },
  ]);

  const [newName, setNewName] = useState('');

  const addPerson = (e) => {
    e.preventDefault();
    const newPerson = { name: newName };
    setPersons([...persons, newPerson]);
    setNewName('');
  };

  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input type='text' value={newName} onChange={handleNewName} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => {
          return (
            <p key={person.name}>
              <b>{person.name}</b>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default App;
