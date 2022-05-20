import React from 'react'
import { Route, Navigate } from 'react-router-dom'
// import { useAuth } from '../contexts/AuthContext'
import { useStore } from '../Store/store'

const PrivateRoute = ({ component: Component, ...rest }) => {

    const state = useStore()
    const isLoggedIn = state.isLoggedIn

    return <Route>
        {...rest}
        render={props => {
            isLoggedIn ? <Component {...props} /> : <Navigate to='/Home' />
        }}

    </Route>
}

export default PrivateRoute
