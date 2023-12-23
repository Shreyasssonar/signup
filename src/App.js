// App.js
// App.js
import React, { useState } from 'react';
import Login from './Componenets/Login';
import Profile from './Componenets/Profile';
import './App.css';

const App = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (userData) => {
    // Save user object in local storage
    localStorage.setItem('user', JSON.stringify(userData));
    setLoggedInUser(userData);
  };

  return (
    <div>
      {loggedInUser ? (
        <Profile userId={loggedInUser.id} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;


