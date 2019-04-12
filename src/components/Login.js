import React from 'react';
import '../App.css';
import LoginForm from './LoginForm';

import {withRouter} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          username: '',
          password: '',
          rememberMe: false,
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      console.log('I am already mounted')
    }
  
    handleChange(event) {
        this.setState({[event.target.name]: event.target.value})
    }
  
    handleSubmit(event) {
      event.preventDefault();
      fetch('https://ireporter-drf-api-staging.herokuapp.com/api/auth/login/', {
      method: 'POST',
      headers : {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          username: this.state.username,
          password: this.state.password
        },
        ),})
        .then(response => response.json())
        .then(jsondata => {
          if (jsondata.message === 'Wrong username or password') {
            document.getElementById('alert').style.color = 'red';
            document.getElementById('alert').innerHTML = jsondata.message;
          } else {
            console.log(jsondata);
            console.log(jsondata.token);
            localStorage.setItem('token', jsondata.token);
            this.setState({
              data: jsondata,
            })
            this.props.history.push('/signup');
          }
        });
    }
  
    render() {
      const {rememberMe, value} = this.state
      return (
        <div className="App-header">
            <div className="container">
                <div className="left"></div>
                <div className="right">
                    <LoginForm rememberMe={rememberMe} value={value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
                </div>
            </div>
        </div>
      );
    }
  }

export default withRouter(Login);