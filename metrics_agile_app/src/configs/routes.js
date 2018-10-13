import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Main from '../containers/main/App';
import Login from '../containers/login/Login';
import FirstLoginConfig from '../containers/FirstLoginConfig/FirstLoginConfig';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/main" component={Main} />
            <Route path="/firstLogin" component={FirstLoginConfig} />
        </Switch>
    </BrowserRouter>
);

export default Routes;