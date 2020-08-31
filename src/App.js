import React from 'react';

//components
import Login from './components/Login';

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            We Don't Go To Ravenholm
          </p>
        </header>
        <Login />
      </div>
    );
  }

}

export default App;
