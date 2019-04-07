import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import './App.css';
import { Login } from './components/Login';
// import { Login } from './components/Login';


class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Login />
      </div>
    );
  }
}

export default App;