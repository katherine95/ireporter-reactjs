import React from 'react';
import '../App.css';
import SignupForm from '../components/SignupForm';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      othername: '',
      username: '',
      mobilenumber: '',
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('I am loaded');
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit() {
    event.preventDefault();
    fetch('https://ireporter-drf-api-staging.herokuapp.com/api/auth/signup/', {
      method: 'POST',
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        {
          first_name: this.state.firstname,
          last_name: this.state.lastname,
          other_name: this.state.othername,
          username: this.state.username,
          mobile_number: this.state.mobilenumber,
          email: this.state.email,
          password: this.state.password
        },
      ),
    })
      .then(response => response.json())
      .then(jsondata => {
        console.log(Object.values(jsondata));
        if (jsondata.username[0] === 'user with this username already exists.') {
          try {
            var error = document.getElementById('username_error')
            error.innerHTML = jsondata.username[0]
            error.style.color = "red"
          } catch (e) {
          }
        } else if (jsondata.mobile_number === 'The phone number entered is not valid.') {
          try {
            var error = document.getElementById('number_error')
            error.innerHTML = jsondata.mobile_number[0]
            error.style.color = "red"
          } catch (e) {
            console.log(e);
          }
        } else if (jsondata.email === 'user with this username already exists.') {
          try {
            var error = document.getElementById('email_error')
            error.innerHTML = jsondata.email[0]
            error.style.color = "red"
          } catch (e) {
            console.log(e);
          }
        } else if (jsondata.password) {
          try {
            var error = document.getElementById('password_error')
            error.innerHTML = jsondata.password
            error.style.color = "red"
          } catch (e) {
            console.log(e);
          }
        } else {
          fetch('https://ireporter-drf-api-staging.herokuapp.com/api/auth/activate/', {
            method: 'POST',
            body: JSON.stringify({
              uid: jsondata.id,
              token: jsondata.token,
            }),
            headers: {
              "Content-type": "application/json; charset=UTF-8"
            }
          })
            .then(res => res.json())
            .then(data => {
              console.log(data);
              fetch('https://ireporter-drf-api-staging.herokuapp.com/api/auth/login/', {
                method: 'POST',
                body: JSON.stringify({
                  username: this.state.email,
                  password: this.state.password,
                }),
                headers: {
                  "Content-type": "application/json; charset=UTF-8"
                }
              })
                .then(res => res.json())
                .then(respdata => {
                  this.props.history.push("/redflags");
                })
            })
        }
      });
  }


  render() {
    const { value } = this.state
    return (
      <div className="App-header">
        <div className="container">
          <div className="left"></div>
          <div className="right">
            <SignupForm value={value} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    );
  }
}
