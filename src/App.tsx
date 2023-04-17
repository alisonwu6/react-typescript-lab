import React from 'react';
import './App.css';

const App: React.FC = () => {
  const seconds = new Date().getSeconds()
  return (
    <h3>{ seconds }</h3>
  );
}

export default App;
