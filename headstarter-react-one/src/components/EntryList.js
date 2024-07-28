import React from 'react';
import './EntryList.css';

function EntryList({ entries, onSelect, onDelete }) {
  return (
    <ul className="EntryList">
      {entries.map((entry) => (
        <li key={entry.id} className="entry">
          <div onClick={() => onSelect(entry)}>
            <h2>{entry.title}</h2>
            <p>{entry.content}</p>
          </div>
          <button onClick={() => onDelete(entry.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
}

export default EntryList;
