import React, { createContext, useState, useEffect } from 'react';
import { loadTheme, saveTheme } from '../utils/localStorage';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(loadTheme());

  useEffect(() => {
    saveTheme(darkMode);
    document.body.className = darkMode ? 'dark' : '';
  }, [darkMode]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
