import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <ul>
            {props.todos.map(todo => {
                return <Todo text={todo}/>
            })}
        </ul>
    )
}

export default TodoList;