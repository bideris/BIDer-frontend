import React from 'react';
import { IndexRoute } from 'react-router';
import { Route } from 'react-router-dom';
import App from './App'
import WelcomePage from '../components/WelcomePage';
import SignUpPage from '../components/SignUp/SignUpPage';
import LoginPage from '../components/LogIn/LogInPage';
import NotFound from '../components/NotFound/NotFound';
import requireAuth from './requireAuth';
import Dashboard from '../components/Dashboard/Dashboard';

export default (
    <Route path="/" component={App}>
        {/*Common routes*/}
        <IndexRoute component={WelcomePage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/login" component={LoginPage} />
        {/*User routes*/}
        <Route path="/dashboard" component={requireAuth(Dashboard)} />
        {/*Error route*/}
        <Route path="*" exact={true} component={NotFound} />
    </Route>
)