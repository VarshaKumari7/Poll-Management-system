import React from "react";
import "./login.css";
import Button from "../Button";

const Login = () => {
  return (
    <div className="container">
      <h1>Sign in</h1>
      <input
        type="text"
        name="username"
        // value="..........."
        placeholder="Username *"
      />
      <input
        type="password"
        name="password"
        // value="..........."
        placeholder="Password *"
      />
      <Button title={"SIGN IN"}></Button>
      <span className="content">Don't have an account? Sign Up</span>
    </div>
  );
};

export default Login;
