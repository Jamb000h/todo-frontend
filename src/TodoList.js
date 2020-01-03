import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    const filteredTodos = props.todos
    .filter(todo => {
        if (props.filter === "showAll") {
            return true;
        }

        if (props.filter === "done") {
            return todo.isDone === true;
        }

        return todo.isDone === false;
    })
    .map(todo => (
        <Todo
            key={todo.id}
            isDone={todo.isDone}
            text={todo.text}
            toggleDone={() => props.toggleDone(todo.id)}
            />
    ))

    return (
        <ul>{filteredTodos}</ul>
    )
}

export default TodoList;