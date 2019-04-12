import React, { Component } from 'react'
import '../App.css';


export default class SignupForm extends Component {

    constructor(props) {
        super(props)
    }

  render() {
    const {handleChange, handleSubmit, value} = this.props
    return (
      <div>
        <form className="form" onSubmit={handleSubmit}>
          <p id='alert'></p>
          <label>
              First Name:
              <input type="text" name="firstname" required value={value} onChange={handleChange} />
          </label>
          <br />
          <label>
              Last Name:
              <input type="text" name="lastname" required value={value} onChange={handleChange} />
          </label>
          <br />
          <label>
              <p id='username_error'></p>
              Username:
              <input type="text" name="username" required value={value} onChange={handleChange} />
          </label>
          <br />
          <label>
              Other Name:
              <input type="text" name="othername" required value={value} onChange={handleChange} />
          </label>
          <br />
          <label>
              <p id='number_error'></p>
              Mobile Number:
              <input type="text" name="mobilenumber" required value={value} onChange={handleChange} />
          </label>
          <br />
          <label>
              <p id='email_error'></p>
              Email Address:
              <input type="email" name="email" required value={value} onChange={handleChange} />
          </label>
          <br />
          <label>
              <p id='password_error'></p>
              Password:
              <input type="password" name="password" required value={value} onChange={handleChange} />
          </label>
          <br />
          <button type="submit" value="Submit" >Sign Up</button>
          <br />
        </form>
      </div>
    )
  }
}
