import React from 'react';
import { Part } from './Part';

export const Content = ({ course }) => {
  const parts = course.parts;
  return (
    <>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]} />
    </>
  );
};
