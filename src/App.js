import React from 'react';
import './App.css';
import PrintBill from './components/PrintBill';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <PrintBill />
      </header>
    </div>
  );
};

export default App;
