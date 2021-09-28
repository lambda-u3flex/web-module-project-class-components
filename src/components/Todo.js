import React from 'react';

const Todo = (props) => {
    return(<div>
        {console.log(props.todo.task)}
        {props.todo.task}
    </div>)
}

export default Todo;