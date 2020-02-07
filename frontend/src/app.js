import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Play from './game_play'
import footer from './footer'
import Footer from './footer';

const App = () => (
    <div className= 'app-container'>
        <Switch>
            <Route path='/' render={props =>(
                <Play {...props}/>
            )}/>
        </Switch>
        <Footer/>
    </div>
);

export default withRouter(App);