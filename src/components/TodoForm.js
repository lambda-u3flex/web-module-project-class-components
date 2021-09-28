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

    return(<>
        <form onSubmit={handleAddClick}>
            <StyledDiv>
            <InputDiv>
                <StyledInput onChange={handleChange} type="text" placeholder="Enter task..." />
            </InputDiv>
            <ButtonDiv>
                <Add onClick={handleAddClick}>Add</Add>
                <Clear onClick={handleClearClick}>Clear</Clear>
            </ButtonDiv>
            </StyledDiv>
        </form>
    </>)
}

const StyledDiv = styled.div`
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    flex-direction: row;
    justify-content: space-between;
    border-top: 1px solid #BB86FC;
`

const InputDiv = styled.div`
display: flex;
justify-content: flex-start;
width: 60%;
`

const StyledInput = styled.input`
  background: #40375c;
  border: none;
  height: 2.4rem;
  border-radius: .2rem;
  color: #fff;
  width: 100%;
  font-size: 1.2rem;
  padding-left: .5rem;
  ::placeholder {
      color: #fff;
  }
`

const ButtonDiv = styled.div`
display: flex;
justify-content: flex-end;
width: 40%;
`

const Add = styled.button`
width: 100%;
background: #BB86FC;
border: none;
text-transform: uppercase;
font-size: 1rem;
`

const Clear = styled.button`
width: 100%;
text-transform: uppercase;
font-size: 1rem;
`

export default TodoForm;
