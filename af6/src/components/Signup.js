import React, { useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";

const initialFormValues = {
  username: "",
  password: "",
  email: "",
  role: ""
};

const Signup = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");

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
        handleErrors();
      });
  };

  const handleErrors = () => {
    if (
      formValues.username !== "eve.holt@reqres.in" ||
      formValues.password !== "pistol"
    )
      setError("Username or Password not valid");
  };
  return (
    <div>
      <h1>Sign up for Anywhere Fitness!</h1>
      <div className="login-form"></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input 
          type="text"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          id="email"
          placeholder="Email..."
          />
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          id="username"
          placeholder="Username..."
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          id="password"
          placeholder="Password..."
        />
        <label>
          <select id="role-dropdown" name="role" value={formValues.role} onChange={handleChange}>
            <option>--Select a role--</option>
            <option value="client">Client</option>
            <option value="instructor">Instructor</option>
          </select>
        </label>
        <button>Join!</button>
      </form>

      <p className="error">{error}</p>
    </div>
  );
};

export default Signup;
