import React from 'react';

const TaskFilter = ({ filter, setFilter, taskCounts }) => {
  const tabs = ['All', 'Completed', 'Pending'];

  const wrapperStyle = {
    display: 'flex',
    gap: '10px',
    marginBottom: '20px',
    flexWrap: 'wrap',
  };

  const buttonStyle = (isActive) => ({
    flex: 1,
    padding: '10px',
    background: isActive ? '#007bff' : '#f0f0f0',
    color: isActive ? 'white' : 'black',
    border: 'none',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background 0.2s',
  });

  return (
    <div style={wrapperStyle}>
      {tabs.map((tab) => (
        <button
          key={tab}
          style={buttonStyle(filter === tab)}
          onClick={() => setFilter(tab)}
        >
          {tab} ({taskCounts[tab] || 0})
        </button>
      ))}
    </div>
  );
};

export default TaskFilter;
