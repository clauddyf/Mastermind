import React from 'react';
import { Route, Switch, withRouter } from 'react-router';
import Play from './game_play';
import Footer from './footer';
import Greeting from './greeting';
// Our app function provides us the architecture of the DOM
// from top to bottom, we have our greeting container, our game play container,
// and our footer
const App = () => (
    <div className= 'app-container'>
        <header className="nav-bar">
            <Greeting/>
        </header>
        <Switch>
            <Route path='/' render={props =>(
                <Play {...props}/>
            )}/>
            
        </Switch>
        <Footer/>
    </div>
);

export default withRouter(App);