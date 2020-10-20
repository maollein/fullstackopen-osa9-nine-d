import React from 'react';
import { CourseParts } from '../types';
import Part from './Part';

const Content: React.FC<CourseParts> = ({ courseParts }) => {
  return <>{courseParts.map(part => <Part key={part.name} part={part} />)}</>
}

export default Content;