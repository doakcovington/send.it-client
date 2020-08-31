export const setCurrentUser = user => {
    return {
      type: "SET_CURRENT_USER",
      user
    }
}

export const login = (credentials, history) => {
    return dispatch => {
      return fetch("http://localhost:5000/api/v1/login", {
            credentials: "include",
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
    }
}