import React from 'react';

export const Form = ({ newPerson, handleNewPerson, addPerson }) => {
  return (
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
  );
};
