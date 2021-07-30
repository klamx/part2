import React from 'react';

export const Header = ({ course }) => {
  const { name } = course;
  return (
    <>
      <h1>{name}</h1>
    </>
  );
};
