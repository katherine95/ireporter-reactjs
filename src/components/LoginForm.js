import React, { Component } from 'react'
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
            <label>
                Username:
                <input type="text" name="username" value={value} onChange={handleChange} />
            </label>
            <br />
            <label>
                Password:
                <input type="password" name="password" value={value} onChange={handleChange} />
            </label>
            <br />
            <label>
                <input name="rememberMe" type="checkbox" checked={rememberMe} onChange={handleChange} />Remember Me
            </label>
            <br />
            <button type="submit" value="Submit" >Log In</button>
            <br />
            <br />
            <p>Create an account?</p><br /><button type="submit" value="Submit">Sign Up</button>
        </form>
      </div>
    )
  }
}
