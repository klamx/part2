import React from 'react';

export const Persons = ({ filteredPersons, filter, persons }) => {
  if (!filteredPersons.length) {
    return <p>No matches found</p>;
  }
  return (
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
  );
};
