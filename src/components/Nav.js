import React from 'react'
import { connect } from 'react-redux'


//components
import Login from './Login';
import Logout from './Logout'

const Nav = ({currentUser}) => { //username and password and the props being passed in 

  return (
    <div>
      <h2>{currentUser ? `${currentUser.attributes.username} is signed in` : "Please Sign In"}</h2>
      {currentUser ? <Logout /> : <Login />}
    </div>
  )
}

const mapStateToProps = ({currentUser}) => {
  return {
    currentUser
  }
}

export default connect(mapStateToProps)(Nav) // 'login' is an action creater