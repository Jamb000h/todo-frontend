import React from 'react';
import TodoList from './TodoList';

function App() {

  const todos = ["Todo1", "Todo2", "Todo3"];

  return (
    <div className="App">
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
