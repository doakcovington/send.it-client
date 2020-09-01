import React from 'react';
import { connect } from 'react-redux'

//actions
import { getCurrentUser } from './actions/currentUser'

//components
import NavBar from './components/NavBar'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <div><NavBar /></div>
    );
  }

}


export default connect(null, { getCurrentUser })(App);
