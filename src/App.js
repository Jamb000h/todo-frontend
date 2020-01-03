import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from "./TodoForm";
import FilterButton from './FilterButton';

const App = () => {

  const [todos, setTodos] = useState([]);
  const [filter, changeFilter] = useState("showAll");

  const toggleDone = id => {
    const newTodos = todos.map(todo => (
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo 
    ))
    setTodos(newTodos);
  }

  const saveTodo = todoText => {
    const trimmedText = todoText.trim();

    if(trimmedText.length > 0){
      setTodos([...todos, {id: todos.length, text: todoText, isDone: false}]);
    }
  }

  return (
    <div className="App">
      <TodoForm saveTodo={saveTodo} />
      <FilterButton changeFilter={() => { changeFilter("showAll") }} text={"Show All"} />
      <FilterButton changeFilter={() => { changeFilter("done") }} text={"Show Done Todos"} />
      <FilterButton changeFilter={() => { changeFilter("notDone") }} text={"Show Not Done Todos"} />
      <TodoList todos={todos} filter={filter} toggleDone={toggleDone} />
    </div>
  );
}

export default App;
