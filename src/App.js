import React from 'react';
import { connect } from 'react-redux'

//actions
import { getCurrentUser } from './actions/currentUser'

//components
import Login from './components/Login';

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


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

export default connect(null, { getCurrentUser })(App);
