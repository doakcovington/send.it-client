import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//reducers
import users from './reducers/users'
import currentUser from './reducers/currentUser'
import loginForm from './reducers/loginForm'

const reducer = combineReducers({
    users,
    currentUser,
    loginForm
});
  
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store

