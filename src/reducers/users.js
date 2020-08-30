export default(state = [], action) => { //when @@INIT fires it return default state of all reducers (empty array for users reducers)
    switch(action.type) {
        default:
            return state
    }
}