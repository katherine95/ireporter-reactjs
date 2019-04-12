import React, { Component } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import { Signup } from './components/Signup';

class App extends Component {
  render() {
    return (
          <div>
            <BrowserRouter >
                  <Navbar />
                  <Route exact path='/' component={ Login } />
                  <Route path='/signup' component={ Signup } />
            </BrowserRouter >
            </div>
        );
  }
}

export default App;