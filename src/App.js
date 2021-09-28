import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: "Build Todo App",
    id: 1,
    completed: false,
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

  handleChange = (e) => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
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
      <div>
        <h1>Todo List</h1>
        <TodoList tasks={this.state.tasks} /> 
        <TodoForm handleChange={this.handleChange} handleAdd={this.handleAdd} handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
