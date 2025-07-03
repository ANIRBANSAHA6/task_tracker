import React, { useState, useEffect } from 'react';
import TaskForm from './TaskForm';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import SearchBar from './SearchBar';
import { loadTasks, saveTasks } from '../utils/localStorage';

const Dashboard = () => {
  // ✅ Load tasks using the helper
  const [tasks, setTasks] = useState(() => loadTasks());
  const [filter, setFilter] = useState('All');
  const [searchText, setSearchText] = useState('');

  // ✅ Save tasks to localStorage when changed
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  const addTask = (task) => {
    setTasks([task, ...tasks]);
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    if (window.confirm('Delete this task?')) {
      setTasks(tasks.filter(task => task.id !== id));
    }
  };

  const taskCounts = {
    All: tasks.length,
    Completed: tasks.filter(task => task.completed).length,
    Pending: tasks.filter(task => !task.completed).length,
  };

  const filteredTasks = tasks
    .filter(task => {
      if (filter === 'Completed') return task.completed;
      if (filter === 'Pending') return !task.completed;
      return true;
    })
    .filter(task =>
      task.title.toLowerCase().includes(searchText.toLowerCase())
    );

  return (
    <div className="dashboard" style={{ padding: '20px' }}>
      <h2>Welcome, {localStorage.getItem('username')} 👋</h2>
      <TaskForm onAddTask={addTask} />
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      <TaskFilter filter={filter} setFilter={setFilter} taskCounts={taskCounts} />
      <TaskList tasks={filteredTasks} onToggle={toggleTask} onDelete={deleteTask} />
    </div>
  );
};

export default Dashboard;
