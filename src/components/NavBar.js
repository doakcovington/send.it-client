import React from 'react'
import { connect } from 'react-redux'

//components
import Login from './Login';
import Logout from './Logout'

const NavBar = ({currentUser}) => { //username and password and the props being passed in 

  return (
    <div>
      {currentUser ? <Logout /> : <Login />}
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar) // 'login' is an action creater