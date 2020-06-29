import React from 'react';
import './App.css';
import SimplePaper from './Components/Header'
import PrimarySearchAppBar from './Components/AppBar'

function App() {
  return (
    <div className="App">
      <PrimarySearchAppBar />
      <SimplePaper />
    </div>
  );
}

export default App;
