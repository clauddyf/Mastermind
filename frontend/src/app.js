import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Play from './game_play'

const App = () => (
    <div className= 'app-container'>
        <Switch>
            <Route path='/' render={props =>(
                <Play {...props}/>
            )}/>
        </Switch>
    </div>
);

export default withRouter(App);