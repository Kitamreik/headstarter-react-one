import React, { useState } from 'react';
import './EntryForm.css';

function EntryForm({ onCreate, onUpdate, selectedEntry }) {
  const [entry, setEntry] = useState(selectedEntry || { title: '', content: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry({ ...entry, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (entry.id) {
      onUpdate(entry);
    } else {
      onCreate({ ...entry, id: Date.now() });
    }
    setEntry({ title: '', content: '' });
  };

  return (
    <form className="EntryForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        value={entry.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <textarea
        name="content"
        value={entry.content}
        onChange={handleChange}
        placeholder="Content"
        required
      ></textarea>
      <button type="submit">Save Entry</button>
    </form>
  );
}

export default EntryForm;
