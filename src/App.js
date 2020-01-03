import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from "./TodoForm";

function App() {

  /* const todos = ["todo1", "todo2", "todo3"]; */
  const [todos, setTodo] = useState(["todo1", "todo2", "todo3"]);

  return (
    <div className="App">
      <TodoForm saveTodo={ todoText => {
          const trimmedText = todoText.trim();

          if(trimmedText.length > 0){
            setTodo([...todos, trimmedText]);
          }
        }} 

      />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
