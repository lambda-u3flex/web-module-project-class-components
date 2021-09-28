import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import './App.css'
import styled from 'styled-components';
import { HiOutlineSearchCircle } from 'react-icons/hi';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: [],
      isSearching: false,
      search: '',
      filtered: []
    }
  }

  componentDidMount() {
    this.setState({
      ...this.state,
      tasks: window.localStorage.getItem('tasks') ? JSON.parse(window.localStorage.getItem('tasks')) : []
    })
  }

  componentDidUpdate() {
    const updatedTasks = [...this.state.tasks];
    window.localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  }

  handleToggle = (id) => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.map((task) => {
        if(task.id === id) {
          return({
            ...task,
            completed: !task.completed
          })
        } else {
          return(task);
        }
      })
    })
  }

  handleFilteredToggle = (id) => {
    this.setState({
      ...this.state,
      filtered: this.state.filtered.map((task) => {
        if(task.id === id) {
          return({
            ...task,
            completed: !task.completed
          })
        } else {
          return(task);
        }
      })
    })
  }

  handleAdd = (name) => {
    const newTask = {
      task: name,
      id: Date.now(),
      completed: false
    }

    const updatedItems = [...this.state.tasks, newTask];

    this.setState({
      ...this.state,
      tasks: updatedItems,
      input: ''
    })

    window.localStorage.setItem('tasks', JSON.stringify(updatedItems));
  }

  handleClear = () => {
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task) => {
        return(!task.completed)
      })
    })
  }

  handleChange = (e) => {
    this.setState({
      ...this.state,
      search: e.target.value
    })
  }

  handleSearch = () => {
    this.setState({
      ...this.state,
      isSearching: true,
      filtered: this.state.tasks.filter((task) => {
        return(task.task.includes(this.state.search))
      })
    })
    if (this.state.search === '') {
      this.setState({
        isSearching: false
      })
    }
  }

  render() {
    return (<>
      <Nav>
        <TitleDiv>
          <StyledH1>todoizt</StyledH1>
        </TitleDiv>
        <SearchDiv>
          <Search onChange={this.handleChange} type="text" value={this.state.search} placeholder="Search" />
          <StyledButton onClick={this.handleSearch}>
            <HiOutlineSearchCircle color={'#BB86FC'} size={'2.2rem'} />
          </StyledButton>
        </SearchDiv>
      </Nav>
      <StyledDiv>
        {this.state.isSearching
          ? <TodoList tasks={this.state.filtered} handleToggle={this.handleFilteredToggle} />
          : <TodoList tasks={this.state.tasks} handleToggle={this.handleToggle} />}
        <TodoForm handleAdd={this.handleAdd} handleClear={this.handleClear} placeholder={this.state.placeholder} value={this.state.input} />
      </StyledDiv>
    </>);
  }
}

const Nav = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 1rem;
  padding-right: 0.5rem;
  background: #161618;
  border-bottom: 1px solid #BB86FC;
`
const TitleDiv = styled.div`
  justify-content: flex-start;
  padding: 0.3rem;
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
  padding: 0 .5rem;
`

const Search = styled.input`
  background: #40375c;
  border: none;
  height: 1.8rem;
  border-radius: .2rem;
  color: #fff;
  width: 60%;
  border: 1px solid #BB86FC;
  margin-top: 1.1rem;
  font-family: 'Open Sans', sans-serif;
  padding-left: .5rem;
  ::placeholder {
    font-family: 'Open Sans', sans-serif;
  }
`

const StyledButton = styled.button`
  background: none;
  border: none;
  margin-top: .9rem;
`

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5.2rem;
  box-sizing: border-box;
  width: 100%;
`

export default App;
