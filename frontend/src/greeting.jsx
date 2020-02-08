import React from 'react';
import { Link } from 'react-router-dom';
import Play from './game_play'

const greeting = () => (
    <div className= 'header-link'>
        <div className='logo-img'>
            <img src="/holding_lights.jpg" alt=""/>
        </div>
            <div className='logo-name'>
                Mastermind
            </div>
    </div>
);

export default greeting;