import React, {useState} from "react";

const TodoForm = props => {
    
    const [value, setValue] = useState("");

    return (
        <form
            onSubmit={ event => {
                event.preventDefault();
                props.saveTodo(value);
                console.log(value);
            }}
        >
            <label>
                Todo:
                <input 
                    type="text"
                    placeholder="Todo Text..."
                    onChange={event => {
                        setValue(event.target.value);
                    }}
                    value={value}
                />
            </label>
            <input type="submit" value="Add Todo" />
        </form>
    );
}

export default TodoForm;