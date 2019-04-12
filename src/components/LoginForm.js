import React, { Component } from 'react';
import '../App.css';


export default class LoginForm extends Component {

    constructor(props) {
        super(props)
    }

  render() {
    const {handleChange, handleSubmit, value, rememberMe} = this.props

    return (
      <div>
        <form onSubmit={handleSubmit} className="form">
        <p id='alert'></p>
            <label>
                Username:
                <input type="text" name="username" required value={value} onChange={handleChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" required value={value} onChange={handleChange} />
            </label>
            <br />
            <label>
                <input name="rememberMe" type="checkbox" checked={rememberMe} onChange={handleChange} />Remember Me
            </label>
            <br />
            <button type="submit" value="Submit" >Log In</button>
            <br />
            <br />
            <p>Create an account?</p><br /><button value="Submit"><a href="/signup">Register</a></button>
        </form>
      </div>
    )
  }
}
