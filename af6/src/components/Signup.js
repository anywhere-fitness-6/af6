import React, { useState } from "react";
import { Button } from 'semantic-ui-react';
import axiosWithAuth from '../helpers/axiosWithAuth';

const Register = () => {
  const [formValues, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
  });

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/register", formValues)
      .then((res) => {
        console.log("res:", res);
        //res.data.payload gives us token
        localStorage.setItem("token", res.data.payload);
        //   props.history.push('/protected/bubbles')
      })
      .catch((err) => {
        console.log({ "err:": err.response.data });
      });

  };

  return (
    <div className="register">
      <div className="register__header">Register</div>
      <div className="register__contents">
        <div className="img">
          <img
            src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Zml0bmVzc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="register__form">
          <div className="register__formGroup">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
          </div>
          <div className="register__formGroup">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formValues.mail}
              onChange={handleChange}
            />
          </div>
          <div className="register__formGroup">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
          </div>
          <div className="register__formGroup">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Retype Password"
              value={formValues.confirmPassword}
              onChange={handleChange}
            />
          </div>
          <div className="register__formGroup">
            <input placeholder="Auth Code (Instructor Only)" />
            <label id="role-dropdown">
              <select
                name="role"
                value={formValues.role}
                onChange={handleChange}
              >
                <option value="client">Client</option>
                <option value="instructor">Instructor</option>
              </select>
            </label>
          </div>
        </div>
      </div>
      <div className="register__footer">
        <Button
          type="button"
          id="btn"
          onClick={handleSubmit}
        >
          Register
        </Button>
      </div>
    </div>
  );
};

export default Register;
