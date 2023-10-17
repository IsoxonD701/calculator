import React from 'react';
import Calculator from './Calculator';
import "./App.css"

const App = () => {
  return (
    <div className="app">
      <h1 className='text'>My Calculator</h1>
      <Calculator />
    </div>
  );
};

export default App;