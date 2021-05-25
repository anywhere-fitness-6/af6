import React, { useState } from "react";
import "./Login.styles.scss";

const Login = () => {
  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  
  return (
    <div className="login" >
      <div className="login__header">Login</div>
      <div className="login__contents">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=968&q=80"
            alt=""
          />
        </div>
        <div className="login__form">
          <div className="login__formGroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div className="login__formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="login__footer">
        <button type="button" id="btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;