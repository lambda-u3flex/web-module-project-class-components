import React from 'react';

const TodoForm = (props) => {
    const handleClearClick = (e) => {
        e.preventDefault();
        props.handleClear();
    }

    return(<div>
        <input onChange={props.handleChange} placeholder="Enter task" />
        <button>Add</button>
        <button onClick={handleClearClick}>Clear</button>
    </div>)
}

export default TodoForm;
