import React from 'react';
import { CoursePart } from '../types';
import { assertNever } from '../utils';

interface CoursePartProp {
  part: CoursePart;
}

const Part: React.FC<CoursePartProp> = ({ part }) => {
  switch (part.name) {
    case 'Fundamentals':
      return <p>{`${part.name} | Exercises: ${part.exerciseCount} | Description: ${part.description}`}</p>
    case 'Deeper type usage':
      return <p>{`${part.name} | Exercises: ${part.exerciseCount} | Description: ${part.description} | Link: ${part.exerciseSubmissionLink}`}</p>
    case 'Using props to pass data':
      return <p>{`${part.name} | Exercises: ${part.exerciseCount} | Group projects: ${part.groupProjectCount}`}</p>
    case 'Test part':
      return <p>{`${part.name} | Exercises: ${part.exerciseCount} | Description: ${part.description}`}</p>
    default:
      return assertNever(part);
  }
};

export default Part;