import React, { Component } from 'react';
import QrReader from 'react-qr-scanner';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      result: 'Nothing yet',
      done: false,
      facingMode: 'rear'
    }

    this.handleScan = this.handleScan.bind(this);
    this.handleError = this.handleError.bind(this);
    this.changeFacingMode = this.changeFacingMode.bind(this);
  }

  handleError(err) {
    console.error(err);
  }

  handleScan(data) {
    if(this.state.done === false && data !== null) {
      this.setState({result: data});
      window.location = data;
    }


    if(data != null) {
      this.setState({done: true})
    }
  }

  changeFacingMode() {
    this.setState({
      facingMode: this.state.facingMode === 'front' ? 'rear' : 'front'
    })
  }

  render() {
    var btnStyle={
      marginTop: '50px',
      marginBottom: '50px',
      padding: '20px',
    }

    return (
      <div className="App">
        <button onClick={this.changeFacingMode} style={btnStyle}>
          Change to { this.state.facingMode === 'front' ? 'rear' : 'front' } camera
        </button>
        <div>
          {
            !this.state.done ?
              <QrReader
                delay={500}
                onError={this.handleError}
                onScan={this.handleScan}
                facingMode={this.state.facingMode}
              />
              : null
          }
          <p>
            <a href={this.state.result}>
              {
                this.state.result ? this.state.result : ''
              }
            </a>
          </p>
        </div>
      </div>
    );
  }
}

export default App;
