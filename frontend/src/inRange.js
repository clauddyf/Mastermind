import React from 'react';

const inRange = ({playerInput,difficulty,guess})
    guess() {
        // debugger
        return this.state.playerInput.split('')
    }

    inRange() {
        if (this.state.difficulty === 'hard') {
            let arr = [];
            let range = ['0', '1', '2', '3', '4', '5', '6', '7'];
            arr.push(this.guess().every(e => range.includes(e)))
            arr.push(this.guess().length === 4)

            return arr
        } else if (this.state.difficulty === 'medium') {
            let arr = [];
            let range = ['0', '1', '2', '3', '4'];
            arr.push(this.guess().every(e => range.includes(e)))
            arr.push(this.guess().length === 4)

            return arr
        } else {
            let arr = [];
            let range = ['0', '1', '2'];
            arr.push(this.guess().every(e => range.includes(e)))
            arr.push(this.guess().length === 4)

            return arr
        }
    }
}