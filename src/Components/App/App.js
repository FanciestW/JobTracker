import React from 'react';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../Dashboard/Dashboard';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="app-content">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
