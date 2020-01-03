import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from "./TodoForm";

function App() {

  const [todos, setTodo] = useState([]);
  const [done, setDone] = useState(false);
  const [filter, changeFilter] = useState("showAll");

  return (
    <div className="App">
      <TodoForm saveTodo={ todoText => {
          const trimmedText = todoText.trim();

          if(trimmedText.length > 0){
            setTodo([...todos, {text: todoText, isDone: done}]);
          }
        }} 

      />
      <TodoList todos={todos} filter={filter} isDone={done} setDone={setDone}/>
    </div>
  );
}

export default App;
