import React from 'react';
import styled from 'styled-components';

const Todo = (props) => {
    const handleToggleClick = () => {
        props.handleToggle(props.todo.id);
    }

    return(<StyledContainer>
    {props.todo.completed
        ? <Completed key={props.todo.id} onClick={handleToggleClick} className="completed">{props.todo.task}</Completed>
        : <Incomplete key={props.todo.id} onClick={handleToggleClick}>{props.todo.task}</Incomplete>}
    </StyledContainer>)
}

const StyledContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Completed = styled.div`
    text-align: center;
    margin: .4rem;
    background: #40375c;
    padding: 1rem;
    width: 70%;
    border-radius: .5rem;
    text-decoration: line-through;
    font-size: 1.4rem;
`

const Incomplete = styled.div`
    text-align: center;
    margin: .4rem;
    background: #BB86FC;
    padding: 1rem;
    width: 70%;
    border-radius: .5rem;
    font-size: 1.4rem;
`

export default Todo;