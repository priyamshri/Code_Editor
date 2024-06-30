// src/App.jsx

import React from 'react';
import CodeEditor from './components/CodeEditor';
import './App.css'; // Import the main CSS

const App = () => {
  return (
    <div className="App">
      <h1>Simple Code Editor</h1>
      <CodeEditor />
    </div>
  );
};

export default App;
