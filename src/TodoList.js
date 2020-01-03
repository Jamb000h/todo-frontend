import React from "react";
import Todo from "./Todo";

const TodoList = props => {
    if(props.filter === "showAll") {
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
    } else if(props.filter === "done"){
        return (
            <ul>
                {   
                    props.todos.filter(todo => todo.isDone).map((todo, index) => {
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
    } else if(props.filter === "notDone"){
        return (
            <ul>
                {   
                    props.todos.filter(todo => todo.isDone).map((todo, index) => {
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
}

export default TodoList;