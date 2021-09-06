import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    const name = 'john doe'

    return (
      <div className="App">
      <h1>Hello From React {Math.ceil(Math.random() * 6)}</h1>
      </div>
    );
  }
}

export default App;
