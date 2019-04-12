import React, { Component } from 'react';
import { Navigationbar } from './components/Navigationbar';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Login from './components/Login';
import { Signup } from './components/Signup';
import Redflags from './components/Redflags';

class App extends Component {
  render() {
    return (
          <div>
            <BrowserRouter >
                  <Navigationbar />
                  <Route exact path='/' component={ Login } />
                  <Route path='/signup' component={ Signup } />
                  <Route path='/redflags' component= { Redflags } />
            </BrowserRouter >
            </div>
        );
  }
}

export default App;