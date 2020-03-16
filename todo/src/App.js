import React from 'react';
import TodoList from './components/TodoList'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Todo w/ Reducer!</h1>
      </header>
      <TodoList />
    </div>
  );
}

export default App;
