import React from 'react';

const Todo = props => {

  return (
    <li
      style={
        props.isDone ? {textDecoration: "line-through red"} : {textDecoration: "initial"}
      }
    >
      {props.text}
      <input type="checkbox" onChange={ () => {
        return props.isDone ? props.setDone(false) : props.setDone(true);
      }}/>
    </li>
  )
}

export default Todo;