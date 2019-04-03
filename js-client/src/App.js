import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import io from 'socket.io-client'

class App extends Component {
  componentDidMount(){
    // const socket = io("ws://localhost:9000")

    // socket.on('connect', () => {
    //   socket.send('hello', 'go')
    // })

    // socket.on('event', () => {

    // })
    
    const socket = new WebSocket('ws://localhost:9000')
    socket.addEventListener('open', e => {
      console.log(e)
    })
    
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
