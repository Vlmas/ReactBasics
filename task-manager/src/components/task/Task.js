import React from 'react';
import './Task.css';

const Task = ({ task, deleteTask, toggleTask }) => {
  return (
    <div className="boxer m-2 p-1 d-flex justify-content-between align-items-center border border-success border-2">
      <input type="checkbox" checked={task.isDone} onChange={() => toggleTask(task.id)} />
      <p>{task.content}</p>
      <img src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-color/700/010_x-256.png" onClick={() => deleteTask(task.id)} />
    </div>
  );
};

export default Task;