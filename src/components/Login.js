import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const Login = ({loginFormData, updateLoginForm}) => { //username and password and the props being passed in
    console.log(loginFormData)
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        const updatedFormInfo = {
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormInfo)
    }
    
    const handleSubmit = e => {
        e.preventDefault();
        login(loginFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="username" value={loginFormData.username}onChange={handleInputChange}></input>
            <input type="text" name="password" placeholder="password" onChange={handleInputChange}></input>
            <input type="submit" value="Log In"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}

export default connect(mapStateToProps, {updateLoginForm})(Login)