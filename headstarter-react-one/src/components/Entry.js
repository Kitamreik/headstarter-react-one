import React from 'react';
import './Entry.css';

function Entry({ entry }) {
  return (
    <div className="Entry">
      <h2>{entry.title}</h2>
      <p>{entry.content}</p>
    </div>
  );
}

export default Entry;
