import React from 'react';
import Modal from './modal';


class Greeting extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            show: false
        }
        this.showModal = this.showModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    showModal(){
        this.setState({
            show: true
        })
    }

    closeModal(){
        this.setState({
            show: false
        })
    }

    render(){
        return (
            <div className= 'header-link'>
                <div className='logo-img'>
                    <a href="https://www.linkedin.com/in/claudius-solomon-ba3a2494/">
                        <img src="linkedin.png"  alt=""/>
                    </a>
                    <div className='logo-name'>
                        Mastermind
                    </div>
                </div>
                <div className='greetingModal'>
                    <Modal show = {this.state.show} handleClose={this.closeModal}/>
                    <button type='button' className='greetingButton'onClick={this.showModal}>
                        Instructions
                    </button>
                </div>
            </div>
        );

    } 

} 

export default Greeting;