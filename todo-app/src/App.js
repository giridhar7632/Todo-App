import React from 'react';
import './App.css';
import Form from './components/Form'
import Todolist from './components/Todolist'

function App() {
  
  return (
    <div className="app">
      <h1>Todo App</h1>
      <Form />
      <Todolist />
    </div>
  );
}

export default App;
