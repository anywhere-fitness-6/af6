import React, { useState } from "react";
import axiosWithAuth from "../helpers/axiosWithAuth";

const initialFormValues = {
  username: "",
  number: "",
  password: "",
};

const Login = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [error, setError] = useState("");
  console.log(formValues);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/login", formValues)
      .then((res) => {
        console.log("res:", res);
        //res.data.payload gives us token
        localStorage.setItem("token", res.data.payload);
        //   props.history.push('/protected/')
      })
      .catch((err) => {
        console.log({ "err:": err.response.data });
        handleErrors();
      });
  };

  const handleErrors = () => {
    if (
      formValues.username !== "eve.holt@reqres.in" ||
      formValues.password !== "cityslicka"
    )
      setError("Username or Password not valid");
  };
  return (
    <div>
      <h1>Welcome to the Anywhere Fitness!</h1>
      <div className="login-form"></div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          id="current-username"
          placeholder="Username..."
        />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          id="current-password"
          placeholder="Password..."
        />
        <button>Enter!</button>
      </form>

      <p className="error">{error}</p>
    </div>
  );
};

export default Login;
