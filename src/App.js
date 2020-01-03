import React, {useState} from 'react';
import TodoList from './TodoList';
import TodoForm from "./TodoForm";
import FilterButton from './FilterButton';

function App() {

  const [todos, setTodo] = useState([]);
  const [done, setDone] = useState(false);
  const [filter, changeFilter] = useState("showAll");

  return (
    <div className="App">
      <TodoForm saveTodo={ todoText => {
          const trimmedText = todoText.trim();

          if(trimmedText.length > 0){
            setTodo([...todos, {text: todoText, isDone: false}]);
          }
        }} 

      />
      <FilterButton changeFilter={() => { changeFilter("showAll") }} text={"Show All"} />
      <FilterButton changeFilter={() => { changeFilter("done") }} text={"Show Done Todos"} />
      <FilterButton changeFilter={() => { changeFilter("notDone") }} text={"Show Not Done Todos"} />
      <TodoList todos={todos} filter={filter} isDone={done} setDone={setDone}/>
    </div>
  );
}

export default App;
