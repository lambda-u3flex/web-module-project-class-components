import React, { useState } from 'react';
import { GoDiffAdded, GoDiffRemoved } from 'react-icons/go';
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
                <Add onClick={handleAddClick}>
                    <GoDiffAdded size={35} color={'#BB86FC'} />
                </Add>
                <Clear onClick={handleClearClick}>
                    <GoDiffRemoved size={35} color={'#BB86FC'} />
                </Clear>
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
width: 80%;
background: #40375c;
`

const StyledInput = styled.input`
  background: #40375c;
  border: none;
  height: 2.5rem;
  border-radius: .2rem;
  color: #fff;
  width: 100%;
  font-size: 1.2rem;
  padding-left: .5rem;
  font-family: 'Open Sans', sans-serif;
  ::placeholder {
      color: #fff;
      font-family: 'Open Sans', sans-serif;
  }
`

const ButtonDiv = styled.div`
display: flex;
justify-content: flex-end;
width: 20%;
background: #40375c;
`

const Add = styled.button`
width: 100%;
background: transparent;
border: none;
text-transform: uppercase;
font-size: 1rem;
color: #161618;
margin-top: .2rem;
`

const Clear = styled.button`
width: 100%;
background: transparent;
border: none;
text-transform: uppercase;
font-size: 1rem;
color: #161618;
margin-top: .2rem;
`

export default TodoForm;
