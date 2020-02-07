import React from 'react'

class inRange extends React.Component {
    inArr(playerInput){
        let arr = [];
        playerInput = this.state.playerInput;
        let guess = playerInput.split('');
        let range = ['0','1','2','3','4','5','6','7'];
        arr.push(guess.every(e => range.includes(e)))
        arr.push(guess.length === 4)
        debugger
        return arr
    }

    fT(playerInput){
        this.inRange(playerInput)[0] === false && this.inRange(playerInput)[1] === true 
    }

    tF(playerInput){
        this.inRange(playerInput)[0] === true && this.inRange(playerInput)[1] === false
    }

    fF(playerInput){
        (this.inRange(playerInput)[0] === false && this.inRange(playerInput)[1] === false)
    }
}

export default inRange