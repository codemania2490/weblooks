import React, { Component } from 'react';
import logo from './assests/logo.svg';
import './App.css';
import ButtonAppBar from './components/header';

class App extends Component {
  render() {
    return (
      <div className="App">
          <ButtonAppBar/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
