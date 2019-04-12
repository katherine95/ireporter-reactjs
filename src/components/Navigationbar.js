import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Form, Button, Nav } from 'react-bootstrap';

export const Navigationbar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">iReporter</Navbar.Brand>
        <Nav className="mr-auto" inline>
          <Nav.Link href="/" className="mr-sm-2">
            Login
          </Nav.Link>
          <Nav.Link href="/signup">Register</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
};
