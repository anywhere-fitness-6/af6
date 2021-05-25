import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// import { Switch, Route, Link } from "react-router-dom";
// import Login from "./components/Login";
import SignUp from "./components/Signup";

function App() {
  return (
    <div className="app">
      <SignUp />
      {/* <Login /> */}
    </div>
  );
}

export default App;
