import React from 'react'
import { Route } from 'react-router-dom'
import App from './App'
import RequireAuth from './auth/RequireAuth'
import LoginContainer from '../containers/LoginContainer'
import Home from './Home'

const Routes = () => {
  return (
    <App>
      <Route exact path='/' component={RequireAuth(Home)} />
      <Route exact path='/login' component={LoginContainer} />
    </App>
  )
}

export default Routes
