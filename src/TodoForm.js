import React from "react";

const TodoForm = props => {

    return (
        <form>
            <label>
                Todo:
                <input 
                    type="text"
                    placeholder="Todo Text..."
                />
            </label>
            <input type="submit" value="Add Todo" />
        </form>
    );
}

export default TodoForm;