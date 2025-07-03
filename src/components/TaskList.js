import React from 'react';
import TaskItem from './TaskItem';
import '../styles/TaskItem.css';

const TaskList = ({ tasks, onToggle, onDelete }) => {
  if (tasks.length === 0) return <p>No tasks found.</p>;

  return (
    <div className="task-list">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;
