import React from 'react';

const TodoForm = (props) => {
    console.log(props)
    return(<div>
        <input />
        <button>Add</button>
        <button onClick={props.handleClear}>Clear</button>
    </div>)
}

export default TodoForm;