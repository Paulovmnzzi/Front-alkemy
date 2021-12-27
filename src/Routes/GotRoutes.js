import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Search from '../Pages/Search';
import Home from './../Pages/Home';
import FormPage from './../Pages/FormPage';

const GotRoutes = () => {
    return (
        <Switch>
            <Route exact path='/search' component={Search} />
            <Route exact path='/form' component={FormPage} />
            <Route exact path='/' component={Home} />
            
        </Switch>
    )
}

export default GotRoutes
