// src/components/AuthForm.jsx
import React from "react";

const AuthForm = ({ formData, isLoginMode, error, onChange, onSubmit, toggleMode }) => {
  return (
    <div className="bg-white p-8 rounded shadow-md w-80">
      <h2 className="text-2xl font-bold mb-4">{isLoginMode ? "Login" : "Signup"}</h2>
      <input
        type="text"
        name="username"
        placeholder="Username"
        value={formData.username}
        onChange={onChange}
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={onChange}
        className="w-full mb-3 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button
        onClick={onSubmit}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
      >
        {isLoginMode ? "Login" : "Signup"}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <p
        onClick={toggleMode}
        className="text-blue-500 mt-3 cursor-pointer hover:underline"
      >
        {isLoginMode ? "Don't have an account? Signup here" : "Already have an account? Login here"}
      </p>
    </div>
  );
};

export default AuthForm;
