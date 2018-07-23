import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HomePage from './pages/home/homePage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="home-header">
            <img width="100%" src="/images/snagwork.PNG" position="fixed"/>
        </div>
        <HomePage/>
      </div>
    );
  }
}

export default App;
