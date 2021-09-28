import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'
import styled from 'styled-components';
import { HiOutlineSearchCircle } from 'react-icons/hi';

const tasks = [
  {
    task: "Build Todo App",
    id: 1,
    completed: true,
  },
  {
    task: "Style Todo App",
    id: 2,
    completed: false,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks,
      input: ''
    }
  }

  handleToggle = (id) => {
    this.setState({
      tasks: this.state.tasks.map((task) => {
        if(task.id === id) {
          return({
            ...task,
            completed: !task.completed
          });
        } else {
          return(task);
        }
      })
    });
  }

  handleAdd = (name) => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    }

    this.setState({
      ...this.state,
      tasks: [...this.state.tasks, newTask]
    })
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task) => {
        return(!task.completed)
      })
    })
  }

  handleSearch = () => {
    console.log('test')
  }

  render() {
    return (<>
      <Nav>
        <TitleDiv>
          <StyledH1>todoizt</StyledH1>
        </TitleDiv>
        <SearchDiv>
          <Search />
          <StyledButton onClick={this.handleSearch}>
            <HiOutlineSearchCircle color={'#BB86FC'} size={'2.2rem'} />
          </StyledButton>
        </SearchDiv>
      </Nav>
      <StyledDiv>
        <TodoList tasks={this.state.tasks} handleToggle={this.handleToggle} /> 
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </StyledDiv>
    </>);
  }
}

const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 0.5rem;
  background: #161618;
`
const TitleDiv = styled.div`
  justify-content: flex-start;
  padding-top: 0.5rem;
`

const StyledH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: .8rem;
  color: #BB86FC;
`

const SearchDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  width: 100%;
  padding-top: 1.1rem;
`

const Search = styled.input`
  background: #40375c;
  border: none;
  height: 1.8rem;
  border-radius: .2rem;
  color: #fff;
  width: 60%;
  border: 1px solid #BB86FC;
`

const StyledButton = styled.button`
  background: none;
  border: none;
  margin-top: -.2rem;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export default App;
