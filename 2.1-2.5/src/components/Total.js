import React from 'react';

export const Total = ({ course }) => {
  const { parts } = course;
  const total = parts.reduce((a, b) => {
    return { exercises: a.exercises + b.exercises };
  });
  return (
    <p>
      <b>total of exercises {total.exercises}</b>
    </p>
  );
};
