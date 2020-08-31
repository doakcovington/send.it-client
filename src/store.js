import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

//reducers
import users from './reducers/users'
import users from './reducers/currentUser'

const reducer = combineReducers({
    users
});
  
const composeEnhancer = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
  
const store = createStore(reducer, composeEnhancer(applyMiddleware(thunk)));

export default store 

