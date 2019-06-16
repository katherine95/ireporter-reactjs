import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "../App.css";

export default class SignupForm extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { handleChange, handleSubmit, value } = this.props;
    return (
      <div className='signin-form'>
      <p id="alert"></p>
      <Form onSubmit={handleSubmit} className="form">
          <Form.Label>First name</Form.Label>
          <Form.Control
            type="text"
            placeholder="First name"
            name="firstname"
            required
            value={value}
            onChange={handleChange}
          />
          <Form.Label>Last name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Last name"
            name="lastname"
            required
            value={value}
            onChange={handleChange}
          />
          <Form.Label>Username</Form.Label>
          <p id="username_error" />
          <Form.Control
            type="text"
            placeholder="Username"
            name="username"
            required
            value={value}
            onChange={handleChange}
          />
          <Form.Label>Other name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Other name"
            name="othername"
            required
            value={value}
            onChange={handleChange}
          />
          <Form.Label>Mobile Number</Form.Label>
          <p id="number_error" />
          <Form.Control
            type="text"
            placeholder="Mobile number"
            name="mobilenumber"
            required
            value={value}
            onChange={handleChange}
          />
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <p id="email_error" />
            <Form.Control
              type="text"
              placeholder="Email"
              name="email"
              required
              value={value}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Label>Password</Form.Label>
          <p id="password_error" />
          <Form.Control
            type="password"
            placeholder="Password"
            name="password"
            required
            value={value}
            onChange={handleChange}
          />
        <Button variant="primary" type="submit" value="submit">
          Log in
        </Button>
        <p>Create an account?</p>
        <Button value="Submit">
          <a href="/signup">Register</a>
        </Button>
      </Form>
    </div>

      // <div>
      //   <form className="form" onSubmit={handleSubmit}>
      //     <p id="alert" />
      //     <label>
      //       First Name:
      //       <input
      //         type="text"
      //         name="firstname"
      //         required
      //         value={value}
      //         onChange={handleChange}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       Last Name:
      //       <input
      //         type="text"
      //         name="lastname"
      //         required
      //         value={value}
      //         onChange={handleChange}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       <p id="username_error" />
      //       Username:
      //       <input
      //         type="text"
      //         name="username"
      //         required
      //         value={value}
      //         onChange={handleChange}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       Other Name:
      //       <input
      //         type="text"
      //         name="othername"
      //         required
      //         value={value}
      //         onChange={handleChange}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       <p id="number_error" />
      //       Mobile Number:
      //       <input
      //         type="text"
      //         name="mobilenumber"
      //         required
      //         value={value}
      //         onChange={handleChange}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       <p id="email_error" />
      //       Email Address:
      //       <input
      //         type="email"
      //         name="email"
      //         required
      //         value={value}
      //         onChange={handleChange}
      //       />
      //     </label>
      //     <br />
      //     <label>
      //       <p id="password_error" />
      //       Password:
      //       <input
      //         type="password"
      //         name="password"
      //         required
      //         value={value}
      //         onChange={handleChange}
      //       />
      //     </label>
      //     <br />
      //     <button type="submit" value="Submit">
      //       Sign Up
      //     </button>
      //     <br />
      //   </form>
      // </div>
    );
  }
}
