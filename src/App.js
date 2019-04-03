import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Route,
  NavLink,
  BrowserRouter
} from "react-router-dom";

import home from "./home";
import model from "./model";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <ul className="header">
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/model">Model</NavLink></li>
        </ul>
        <div className="content">
          <Route exact path="/" component={home}/>
          <Route exact path="/model" component={model}/>
        </div>

      </div>
    </BrowserRouter>
    );
  }
}

export default App;
