import React from 'react'

import {Route, Redirect} from 'react-router-dom'
import {isAuthenticated} from '../../lib/auth'


// * If user has been verified and logged then take them to requested page, else if logged out, redirect them to the login page
const SecureRoute = ({component: Component, ...rest}) => {
  if (isAuthenticated()) return <Route {...rest} component={Component} />
  return <Redirect to="/" />
}

export default SecureRoute