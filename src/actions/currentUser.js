export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

export const login = (credentials) => {
    return dispatch => {
      return fetch("http://localhost:5000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(res => res.json())
        .then(user => {
          if(user.error) {
            console.log(user.error)
          } else {
            dispatch(setCurrentUser(user)) //invokes setCurrentUser action
          }
        })
        .catch(console.log)
    }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:5000/api/v1/get_current_user", {
          credentials: "include",
          method: "GET",
          headers: {
          "Content-Type": "application/json"
        },
      })
      .then(res => res.json())
      .then(user => {
        if(user.error) {
          console.log(user.error)
        } else {
          dispatch(setCurrentUser(user.data)) //invokes setCurrentUser action
        }
      })
      .catch(console.log)
  }
}

//logout
export const logout = () => {
  return (dispatch) => {
    dispatch(clearCurrentUser()) //logs user out
    return fetch("http://localhost:5000/api/v1/logout", {
      credentials: "include", //sends cookies back
      method: "DELETE"     
    })
  }
}