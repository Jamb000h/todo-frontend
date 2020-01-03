import React from 'react';
import TodoList from './TodoList';
import TodoForm from "./TodoForm";

function App() {

  const todos = ["todo1", "todo2", "todo3"];

  return (
    <div className="App">
      <TodoForm />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
