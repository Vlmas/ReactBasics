import React from 'react';
import TaskList from './components/task-list/TaskList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
      addendTask: '',
    };
    this.componentCleanup = this.componentCleanup.bind(this);
  }

  componentDidMount() {
    if(!localStorage.getItem('tasks')) {
      localStorage.setItem('tasks', JSON.stringify([]));
    } else {
      let tasks = JSON.parse(localStorage.getItem('tasks'));
      console.log(tasks);
      this.setState({ tasks });
    }
    window.addEventListener('beforeunload', this.componentCleanup); 
  }

  componentCleanup() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks));
  }

  componentWillUnmount() {
    this.componentCleanup();
    window.removeEventListener('beforeunload', this.componentCleanup);
  }

  addTask = () => {
    if (this.state.addendTask === '') {
      alert('Please, enter a proper value!');
      return;
    }

    this.setState((state) => ({
      tasks: [
        ...state.tasks, { id: state.tasks.length + 1, content: state.addendTask, isDone: false }
      ],
      addendTask: '',
    }));
  }

  deleteTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.filter((task) => task.id !== id),
    }));
  }

  toggleTask = (id) => {
    this.setState((state) => ({
      tasks: state.tasks.map((task) => {
        return ((task.id === id) ? { ...task, isDone: !task.isDone } : task);
      })
    }));
  }

  render() {
    return (
      <div className="container d-flex align-items-center justify-content-center">
        <div className="card mt-4 p-5" style={{ width: "45%" }}>
          <div className="card-header text-center">
            <h2>Task Manager</h2>
          </div>

          <div className="card-body text-center">
            <input type="text" placeholder="Enter task name" value={this.state.addendTask} onChange={(e) => this.setState({ addendTask: e.target.value })} />
            {
              (this.state.tasks.length)
                ? <TaskList tasks={this.state.tasks} deleteTask={this.deleteTask} toggleTask={this.toggleTask} />
                : <h3 className="fst-italic">No Tasks</h3>
            }
          </div>
          
          <div className="card-footer">
            <button className="btn btn-outline-success" onClick={() => this.addTask()}>Add Task</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;