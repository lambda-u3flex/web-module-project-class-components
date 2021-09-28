import React, { useState } from 'react';
import styled from 'styled-components';

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

    return(<StyledDiv>
        <form onSubmit={handleAddClick}>
            <input onChange={handleChange} type="text" placeholder="Enter task" />
            <button onClick={handleAddClick}>Add</button>
            <button onClick={handleClearClick}>Clear</button>
        </form>
    </StyledDiv>)
}

const StyledDiv = styled.div`
    margin-top: 1.5rem;
`

export default TodoForm;
