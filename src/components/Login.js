import React from 'react';
import '../App.css';
import LoginForm from './LoginForm';

export class Login extends React.Component {
    constructor() {
      super();
      this.state = {
          username: '',
          password: '',
          rememberMe: false
        };
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    // fetchLogin(){}
    componentDidMount() {
      console.log('ghello there')
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
          console.log(jsondata.token)
          localStorage.setItem('token', jsondata.token);
          this.setState({
            isLoaded: true,
            data: jsondata
        })
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
