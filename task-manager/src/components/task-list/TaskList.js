import React from "react";
import Task from "../task/Task";

class TaskList extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  componentDidMount() {
    this.setState({
      tasks: this.props.tasks
    });
  }

  componentDidUpdate() {
    if(this.props.tasks !== this.state.tasks) {
      this.setState({
        tasks: this.props.tasks
      });
    } 
  }

  render() {
    return (
      <div>
        {this.state.tasks.map((task) => {
          return (
            <Task key={task.id} task={task} deleteTask={this.props.deleteTask} toggleTask={this.props.toggleTask} />
          );
        })}
      </div>
    );
  }
}

export default TaskList;