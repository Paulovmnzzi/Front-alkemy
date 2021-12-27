import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min'

const PublicRoute = ({ isAuthenticated, component: Component, ...rest }) => {
    return (
        <Switch>

            <Route path='/' {...rest} component={
                props => (
                    isAuthenticated ? <Component {...props} /> : <Redirect to='/notfound' />
                )
            }

            />

        </Switch>
    )
}

export default PublicRoute
