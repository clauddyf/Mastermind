import React from 'react';
import { Route, Switch, withRouter } from 'react-route';
import Play from './play/game_play'

const App = () => (
    <div className= 'app-container'>
        <Switch>
            <Route exact={true} path='/' component={Play}/>
        </Switch>
    </div>
);

export default withRouter(App);