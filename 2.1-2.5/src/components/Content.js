import React from 'react';
import { Part } from './Part';

export const Content = ({ course }) => {
  const parts = course.parts;
  return (
    <>
      {parts.map((part) => {
        return <Part key={part.id} part={part} />;
      })}
    </>
  );
};
