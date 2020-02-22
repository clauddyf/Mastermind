import React from 'react';
import { Link } from 'react-router-dom';
import Play from './game_play'

class Greeting extends React.Component{
    render(){
        return (
            <div className= 'header-link'>
                <div className='logo-img'>
                    <a href="https://www.linkedin.com/in/claudius-solomon-ba3a2494/">
                        <img src="linkedin.png"  alt=""/>
                    </a>
                </div>
                <div className='logo-name'>
                    Mastermind
                </div>
            </div>
        );

    } 

} 

export default Greeting;