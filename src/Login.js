import { Button } from '@material-ui/core'
import React from 'react'
import "./Login.css"

function Login() {
  const signIn = () => {

  }
  return (
    <div className="login">
      <div className="login__logo">
        <img src="./Facebook_logo.png" alt=""/>
        <img src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png" alt=""/>
      </div>
      <Button type="submit" onClick={ signIn }>
        Signin
      </Button>
    </div>
  )
}

export default Login
