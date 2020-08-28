import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch("http://localhost:3000/api/vi")
    .then(res => res.json())
    .then( 
      (result) => {
        console.log(result)
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            We Don't Go To Ravenholm
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
