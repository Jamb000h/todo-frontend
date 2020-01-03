import React, {useState} from 'react';

const Todo = props => {

  const [isDone, setDone] = useState(false);

  return (
    <li 
      style={
        isDone ? {textDecoration: "line-through red"} : {textDecoration: "initial"}
      }
    >
      {props.text}
      <input type="checkbox" onChange={ () => {
        return isDone ? setDone(false) : setDone(true);
      }}/>
    </li>
  )
}

export default Todo;