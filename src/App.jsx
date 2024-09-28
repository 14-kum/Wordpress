// src/App.jsx
import React, { useState } from "react";
import AuthForm from "./components/AuthForm";
import UserGreeting from "./components/UserGreeting";

const App = () => {
  const [users, setUsers] = useState([]);
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = () => {
    const existingUser = users.find((user) => user.username === formData.username);
    if (existingUser) {
      setError("Username already taken. Please choose a different one.");
    } else {
      setUsers([...users, formData]);
      setFormData({ username: "", password: "" });
      setError("");
      alert("Signup successful! You can now log in.");
      setIsLoginMode(true);
    }
  };

  const handleLogin = () => {
    const user = users.find(
      (user) => user.username === formData.username && user.password === formData.password
    );
    if (user) {
      setLoggedInUser(user);
      setFormData({ username: "", password: "" });
      setError("");
    } else {
      setError("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      {loggedInUser ? (
        <UserGreeting username={loggedInUser.username} onLogout={handleLogout} />
      ) : (
        <AuthForm
          formData={formData}
          isLoginMode={isLoginMode}
          error={error}
          onChange={handleChange}
          onSubmit={isLoginMode ? handleLogin : handleSignup}
          toggleMode={() => {
            setIsLoginMode(!isLoginMode);
            setError("");
          }}
        />
      )}
    </div>
  );
};

export default App;
