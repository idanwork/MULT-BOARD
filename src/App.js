import React, { Component } from 'react';
import Board from './Board';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Board size={10} />
      </div>
    );
  }
}

export default App;
