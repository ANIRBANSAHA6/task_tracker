import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim() === '') return;
    localStorage.setItem('username', username);
    navigate('/dashboard');
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">🚀 Personal Task Tracker</h2>
        <input
          type="text"
          className="login-input"
          placeholder="Enter your name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button className="login-button" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
