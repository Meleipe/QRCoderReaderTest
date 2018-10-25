import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 'Nothing yet',
      done: false
    }

    this.handleScan = this.handleScan.bind(this)
    this.handleError = this.handleError.bind(this)
  }

  handleError(err) {
    console.error(err);
  }

  handleScan(data) {
    console.log(data);

    if(this.state.done === false && data !== null) {
        this.setState({result: data});
    }

    if(data != null) {
      this.setState({done: true})
    }
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
        <body>
          <QrReader
            delay={500}
            onError={this.handleError}
            onScan={this.handleScan}
          />
          <p>
            <a href={this.state.result}>
              {
                this.state.result ? this.state.result : ''
              }
            </a>
          </p>
        </body>
      </div>
    );
  }
}

export default App;
