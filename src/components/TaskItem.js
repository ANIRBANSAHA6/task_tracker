import React from 'react';
import { motion } from 'framer-motion';

const TaskItem = ({ task, onToggle, onDelete }) => {
  const { id, title, description, priority, dueDate, completed } = task;

  const cardStyle = {
    backgroundColor: 'var(--card-bg)',
    padding: '15px',
    marginBottom: '15px',
    borderRadius: '10px',
    boxShadow: '0 0 6px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease-in-out',
    opacity: completed ? 0.6 : 1,
    textDecoration: completed ? 'line-through' : 'none',
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const priorityStyle = {
    padding: '4px 8px',
    borderRadius: '6px',
    fontSize: '0.8rem',
    fontWeight: 'bold',
    backgroundColor:
      priority === 'High'
        ? '#dc3545'
        : priority === 'Medium'
        ? '#ffc107'
        : '#28a745',
    color: priority === 'Medium' ? '#000' : '#fff',
  };

  const dateStyle = {
    fontSize: '0.9rem',
    color: '#777',
  };

  const actionsStyle = {
    marginTop: '10px',
    display: 'flex',
    gap: '10px',
  };

  const buttonStyle = {
    flex: 1,
    padding: '8px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
  };

  const deleteBtnStyle = {
    ...buttonStyle,
    backgroundColor: '#dc3545',
    color: 'white',
  };

  return (
    <motion.div
      style={cardStyle}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, x: -50 }}
      layout
    >
      <div style={headerStyle}>
        <h3>{title}</h3>
        <span style={priorityStyle}>{priority}</span>
      </div>
      {description && <p>{description}</p>}
      {dueDate && <p style={dateStyle}>Due: {dueDate}</p>}
      <div style={actionsStyle}>
        <button style={buttonStyle} onClick={() => onToggle(id)}>
          {completed ? '↩️ Mark Pending' : '✅ Mark Done'}
        </button>
        <button style={deleteBtnStyle} onClick={() => onDelete(id)}>
          🗑️ Delete
        </button>
      </div>
    </motion.div>
  );
};

export default TaskItem;
