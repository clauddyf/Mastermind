import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <div className='main-footer-div'>
    <h1>&#169;Mastermind Created by Claudius E. Solomon</h1>
    <div className='footer-div'>
        <div className='technology-row'>
            <h3>Technology Used</h3>
            <div className='tech-list'>
                Express   
            </div>
            <div className='tech-list'>
                Javascript
            </div>
            <div className='tech-list'>
                React
            </div>
            <div className='tech-list'>
                HTML
            </div>
            <div className='tech-list'>
                CSS
            </div>
        </div>
        <div className='bio-div'>
            <h2>About Me</h2>
            <ul>
                <div>
                    Born and raised in Silver Spring, MD. 
                </div> 
                <br/>
                <div>
                    Currently residing in San Francisco.
                </div>
                <br/>
                <div>
                    Software Engineer App Academy.
                </div>
            </ul>
        </div>

        <div className='about-me'>
            <h2>This is a LinkedIn Reach Project</h2>
            <div className='contact-me'>
                <a href="https://www.linkedin.com/in/claudius-solomon-ba3a2494/">
                    <img src="linkedin.png" className='contact-img' alt=""/>
                    LinkedIn
                </a>
            </div>
            <div className='contact-me'>
                <a href="https://github.com/clauddyf">
                    <img src="github.png" className='contact-img' alt=""/>
                    GitHub
                </a>
            </div>
        </div>
    </div>

    </div>
)

export default Footer;