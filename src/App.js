import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

const tasks = [
  {
    task: "Build Todo App",
    id: 1,
    completed: true,
  },
  {
    task: "Style Todo App",
    id: 2,
    completed: true,
  },
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  handleClear = () => {
    console.log(tasks)
    this.setState({
      ...this.state,
      tasks: this.state.tasks.filter((task) => {
        return(!task.completed)
      })
    })
    console.log(tasks)
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList tasks={this.state.tasks} /> 
        <TodoForm handleClear={this.handleClear} />
      </div>
    );
  }
}

export default App;
