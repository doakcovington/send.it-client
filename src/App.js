import React from 'react';
import "./App.css";
import { connect } from 'react-redux'

//actions
import { getCurrentUser } from './actions/currentUser'

//components
import Nav from './components/Nav'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <header className="header-container"><Nav /></header>
    );
  }

}


export default connect(null, { getCurrentUser })(App);
