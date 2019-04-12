import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
// import "../App.css";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleSubmit, value, rememberMe } = this.props;

    return (
      <div>
        <p id="alert"></p>
        <Form onSubmit={handleSubmit} className="form">
          
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Username"
              name="username"
              required
              value={value}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              required
              value={value}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicChecbox">
            <Form.Check
              type="checkbox"
              label="Remember me"
              name="rememberMe"
              type="checkbox"
              checked={rememberMe}
              onChange={handleChange}
            />
          </Form.Group>
          <Button variant="primary" type="submit" value="submit">
            Log in
          </Button>
          <p>Create an account?</p>
          <Button value="Submit">
            <a href="/signup">Register</a>
          </Button>
        </Form>
      </div>
    );
  }
}
