import React from 'react';

const resetGame = (props,scoreKeep) => {
        if (props.status === 'win') {
            props.setState({
                playerInput: '',
                try: 0,
                error: null,
                compNumArr: null,
                status: 'play',
                pastGuesses: [],
                score: props.score + scoreKeep
            })
        } else if (props.status === 'fail') {
            props.setState({
                playerInput: '',
                try: 0,
                error: null,
                compNumArr: null,
                status: 'play',
                pastGuesses: [],
                score: 0
            })
        } else {
            props.setState({
                compNumArr: null,
                playerInput: '',
                try: 0,
                error: null,
                status: 'play',
                lastMove: 'Guess four numbers between 0 and 7',
                pastGuesses: [],
                score: 0
        })
        }
}

export default resetGame