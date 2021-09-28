import React from 'react';
import './Todo.css';

const Todo = (props) => {
    const handleToggleClick = () => {
        props.handleToggle(props.todo.id);
    }

    return(<>
    {props.todo.completed
        ? <div key={props.todo.id} onClick={handleToggleClick} className="completed">{props.todo.task}</div>
        : <div key={props.todo.id} onClick={handleToggleClick}>{props.todo.task}</div>}
    </>)
}

export default Todo;