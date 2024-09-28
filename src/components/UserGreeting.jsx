// src/components/UserGreeting.jsx
import React from "react";

const UserGreeting = ({ username, onLogout }) => {
  return (
    <div className="bg-white p-8 rounded shadow-md text-center">
      <h2 className="text-2xl font-bold mb-4">Welcome, {username}!</h2>
      <button
        onClick={onLogout}
        className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition"
      >
        Logout
      </button>
    </div>
  );
};

export default UserGreeting;
