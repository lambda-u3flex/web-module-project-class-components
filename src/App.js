import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'
import styled from 'styled-components';

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

  render() {
    return (
      <StyledDiv>
        <StyledH1>Todoizt</StyledH1>
        <TodoList tasks={this.state.tasks} handleToggle={this.handleToggle} /> 
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </StyledDiv>
    );
  }
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

const StyledH1 = styled.h1`
  font-size: 3rem;
  margin-bottom: 1rem;
`

export default App;
