import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Todo from './components/Todo';

const App = () => {
  return (

    <div className="container">
  <Navbar />
  <Todo />
    </div>
  );
}

export default App;