import React from 'react'
import { connect } from 'react-redux'
import { logout } from "../actions/currentUser.js"


const Logout = ({ logout }) => { //username and password and the props being passed in 

  return (
      <form onSubmit={(e) => {
        e.preventDefault()
        logout()
      }
      }>
          <input type="submit" value="Log Out"></input>
      </form>
  )
}

export default connect(null, { logout })(Logout) // 'login' is an action creater