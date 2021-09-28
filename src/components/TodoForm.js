import React, { useState } from 'react';

const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleAddClick = (e) => {
        e.preventDefault();
        props.handleAdd(input);
    }

    const handleClearClick = (e) => {
        e.preventDefault();
        props.handleClear();
    }

    return(<div>
        <input onChange={handleChange} placeholder="Enter task" />
        <button onClick={handleAddClick}>Add</button>
        <button onClick={handleClearClick}>Clear</button>
    </div>)
}

export default TodoForm;
