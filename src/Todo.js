import React from 'react';

const Todo = props => {

  return (
    <li
      style={
        props.isDone ? {textDecoration: "line-through red"} : {textDecoration: "initial"}
      }
    >
      {props.text}
      <input type="checkbox" onChange={() => props.toggleDone()} checked={props.isDone} />
    </li>
  )
}

export default Todo;