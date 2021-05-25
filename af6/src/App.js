import React from 'react';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "semantic-ui-css/semantic.min.css";
import LogReg from './components/Index';

function App() {
  return (
    <Router>
      <h1 style={{fontSize: '4em', padding: '0.4em' }} >Welcome to Anywhere Fitness!</h1>
      <Switch>
        <Route exact path="/" component={LogReg} />
        <Route exact path="/login" component={LogReg} />
        <Route exact path="/register" component={LogReg} />
      </Switch>
    </Router>
  );
}

export default App;

