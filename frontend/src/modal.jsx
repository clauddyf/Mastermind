import React from 'react';

const Modal = ({handleClose,show}) => {
    const showHideClassName = show ? "modal display-block": "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className='modal-main'>
                <div className='chooseInstructions'>
                    <h2>Instructions</h2>
                    <ul>
                        Feel like you're getting old? Test the strength of the old noggin with Mastermind!
                        This is a game in which the user has 10 attempts to guess a randomly generated combination of 4 numbers.
                    </ul>
                    <div>
                    </div>
                    <div>
                        The range of the four numbers will be based on the difficulty level chosen.
                    </div>
                    <div>
                        Easy: Choose four numbers between 0 and 2
                    </div>
                    <div>
                        Medium: Choose three numbers between 0 and 4
                    </div>
                    <div>
                        Hard: Choose four numbers between 0 and 7
                    </div>
                    <div>
                        This game will provide feedback when you get an exact number, and its position.
                    </div>
                </div>
                <div className='close-x'>
                    <button onClick={handleClose}>x</button>
                </div>
            </section>
        </div>
    );
};

export default Modal