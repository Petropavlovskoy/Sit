import React, { Component } from "react";
import {
  FormControl,
  Navbar,
  Nav,
  Container,
  Form,
  Button,
} from "react-bootstrap";
import logo from "./logo192.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from '../Pages/Home';
import About from './../Pages/About';
import Blog from './../Pages/Blog';
import Contact from './../Pages/Contact';


export default class Header extends Component {
  render() {
    return (
      <>
        <Navbar
          //fixed="top"
          collapseOnSelect
          expand="md"
          bg="dark"
          variant="dark">
            
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo}
                height="30"
                width="30"
                className="d-inline-block align-top"
                alt="Logo"
              />{" "}
              Sergey Liashenko
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About me</Nav.Link>
                <Nav.Link href="/contact">Contact</Nav.Link>
                <Nav.Link href="/blog">Blog</Nav.Link>
              </Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/blog" component={Blog} />
          </Switch>
        </Router>
      </>
    );
  }
}
