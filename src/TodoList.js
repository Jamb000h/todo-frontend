import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    return (
        <ul>
            {   
                props.todos.map((todo, index) => {
                return <Todo 
                        text={todo.text}
                        key={index}
                        isDone={props.isDone}
                        setDone={props.setDone}
                        />
            })
            }
        </ul>
    )
}

export default TodoList;