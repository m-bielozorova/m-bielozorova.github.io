import React from 'react';

export default function Language({ name, level }) {
  return (
    <React.Fragment>
      <span className="language-name text-[#77787b]">{name}</span> –{' '}
      <span className="language-level text-[#48afde]">{level}</span>
    </React.Fragment>
  );
}
