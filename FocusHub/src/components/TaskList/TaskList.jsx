import React, { useState } from "react";
import "./TaskList.css";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();
    if (input.trim() === "") return;
    setTasks([...tasks, input]);
    setInput("");
  };

  const handleDeleteTask = (idx) => {
    setTasks(tasks.filter((_, i) => i !== idx));
  };

  return (
    <div className="TaskList">
      <h2>Task List</h2>
      <form className="input-wrapper" onSubmit={handleAddTask}>
        <input
          className="task-input"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="input-plus-btn" type="submit" aria-label="Add task">
          +
        </button>
      </form>
      <ul className="task-list-body">
        {tasks.map((task, idx) => (
          <li key={idx} className="task-list-itmes">
            <span>{task}</span>
            <button
              onClick={() => handleDeleteTask(idx)}
              className="delete-task-btn"
              aria-label="Delete task"
              title="Delete"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
