// src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    //Urls that can be tested:
    /*
    http://localhost:5000/
    http://localhost:5000/about
    http://localhost:5000/error
    http://localhost:5000/api/data
    http://localhost:5000/api/data/create
    */
    fetch('http://localhost:5000/')
      .then(response => response.json())
      .then(data => setData(data.message))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="App">
      <h1>{data ? data : 'Loading...'}</h1>     
    </div>
  );
}

export default App;
