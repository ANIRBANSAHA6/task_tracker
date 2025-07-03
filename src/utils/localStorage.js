// utils/localStorage.js

// Task storage
const TASKS_KEY = 'tasks';

export const loadTasks = () => {
  try {
    const tasks = localStorage.getItem(TASKS_KEY);
    return tasks ? JSON.parse(tasks) : [];
  } catch (err) {
    console.error('Error loading tasks:', err);
    return [];
  }
};

export const saveTasks = (tasks) => {
  try {
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (err) {
    console.error('Error saving tasks:', err);
  }
};

// Theme storage
const THEME_KEY = 'darkMode';

export const loadTheme = () => {
  return localStorage.getItem(THEME_KEY) === 'true';
};

export const saveTheme = (isDark) => {
  localStorage.setItem(THEME_KEY, isDark.toString());
};
