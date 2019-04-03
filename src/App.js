import React, { Component } from 'react';
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import {
  LinkContainer
} from "react-router-bootstrap"
//import logo from './logo.svg';
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

          <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/model">
                <Nav.Link>Model</Nav.Link>
              </LinkContainer>
              {/*<NavLink to="/">Home</NavLink>*/}
              {/*<NavLink to="/model">Model</NavLink>*/}
              {/*<Nav.Link href="/">Home</Nav.Link>*/}
              {/*<Nav.Link href="/model">SomeModel</Nav.Link>*/}
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-info">Search</Button>
            </Form>
          </Navbar>

          {/*<div className="App">*/}
            {/*<ul className="header">*/}
              {/*<li><NavLink to="/">Home</NavLink></li>*/}
              {/*<li><NavLink to="/model">Model</NavLink></li>*/}
            {/*</ul>*/}
            <div className="content">
              <Route exact path="/" component={home}/>
              <Route exact path="/model" component={model}/>
            </div>
          {/*</div>*/}

        </BrowserRouter>
    );
  }
}

export default App;
