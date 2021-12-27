import React from 'react'
import PublicRoute from './PublicRoute';
import { BrowserRouter, Switch } from 'react-router-dom';
import GotRoutes from './GotRoutes';

const AppRouter = () => {

    const isAuthenticated = true;

    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <PublicRoute isAuthenticated={isAuthenticated} component={GotRoutes} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default AppRouter;