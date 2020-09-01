import React from 'react';
import "./App.css";
import { connect } from 'react-redux'

//actions
import { getCurrentUser } from './actions/currentUser'

//components
import Nav from './components/Nav'

//containers
import MainContainer from './containers/ MainContainer'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <div className="App">
        <Nav />
        <MainContainer />
      </div>
    );
  }

}


export default connect(null, { getCurrentUser })(App);
