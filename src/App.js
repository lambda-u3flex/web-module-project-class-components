import React from 'react';
import TodoList from './components/TodoList';

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
      tasks: tasks
    }
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <TodoList tasks={tasks} /> 
      </div>
    );
  }
}

export default App;
