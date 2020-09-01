import React from 'react';
import { connect } from 'react-redux'

//actions
import { getCurrentUser } from './actions/currentUser'

//components
import Login from './components/Login';
import Logout from './components/Logout'

class App extends React.Component {

  componentDidMount() {
    this.props.getCurrentUser()
  }


  render() {
    return (
      <nav>       
        <Login />
        <Logout />
      </nav>
    );
  }

}

const mapStateToProps = state => {
  return {
    currentUser: state
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
