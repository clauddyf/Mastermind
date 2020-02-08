import React from 'react';
import { Link } from 'react-router-dom';
import Play from './game_play'

const greeting = () => (
    <div className='logo-img'>
        <img src="/table.png" alt=""/>
    
        <div className='logo-name'>
            Mastermind
        </div>
    </div>
);

export default greeting;