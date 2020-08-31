const initialState = {
    username: "",
    password: ""
}

export default(state = [], action) => { //when @@INIT fires it return default state of all reducers (empty array for users reducers)
    switch(action.type) {
        case "UPDATE_LOGIN":
            return action.loginData
        default:
            return state
    }
}