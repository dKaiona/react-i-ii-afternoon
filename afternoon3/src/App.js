import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Header from './components/Header'
import Background from './components/Background'

class App extends Component {

  render() {
    return (
      <div className="App">
      <Header></Header>
   <Background></Background>
      </div>
    );
  }
}

export default App;
