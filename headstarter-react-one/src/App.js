import React, { useState, useEffect } from 'react';
import EntryForm from './components/EntryForm';
import EntryList from './components/EntryList';
import './App.css';

function App() {
  const [entries, setEntries] = useState([]);
  const [selectedEntry, setSelectedEntry] = useState(null);

  useEffect(() => {
    // Fetch initial entries from API or mock data
    const initialEntries = [];
    setEntries(initialEntries);
  }, []);

  const handleCreate = (entry) => {
    setEntries([...entries, entry]);
  };

  const handleUpdate = (entry) => {
    const updatedEntries = entries.map((e) => (e.id === entry.id ? entry : e));
    setEntries(updatedEntries);
  };

  const handleDelete = (id) => {
    const updatedEntries = entries.filter((e) => e.id !== id);
    setEntries(updatedEntries);
  };

  return (
    <div className="App">
      <h1>Entry Manager</h1>
      <EntryForm
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        selectedEntry={selectedEntry}
      />
      <EntryList
        entries={entries}
        onSelect={(entry) => setSelectedEntry(entry)}
        onDelete={handleDelete}
      />
    </div>
  );
}

export default App;
