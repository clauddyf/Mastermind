import React from 'react';

class GamePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compNumArr: null,
            playerInput: '',
            try: 0,
            error: null,
            status: 'play',
            lastMove: 'Guess four numbers between 0 and 7',
            pastGuesses: []
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.resetGame = this.resetGame.bind(this);
        this.getRandArr = this.getRandArr.bind(this);
        // this.numExactMatches = this.numExactMatches.bind(this)
        // this.onChange = this.onChange.bind(this);
        // let guess = playerInput.split('').map(e => parseInt(e))
    }
    
    resetGame() {
        if (this.state.status !== 'fail') {
            this.setState({
                playerInput: '',
                try: 0,
                error: null,
                compNumArr: null,
                status: 'play'
            })
        }
    }
    getRandArr() {
      fetch('http://localhost:9000/randomGen')
        .then(res => res)
        .then(data => this.setState({
            compNumArr: data,
            status:'play'
        }))
        .catch(err => {
            this.setState({status: 'fail'})
        });
    }

    componentDidMount(){
        this.getRandArr();
    }

    componentDidUpdate(prevProps,prevState) {
        if (prevState.status === 'win') {
            this.getRandArr();
        }
    }

    numExactMatches(playerInput){
        debugger
        let guess = playerInput.split('').map(e => parseInt(e))
        let count = 0;
        for (let i = 0; i < guess.length; i++){
            if (this.state.compNumArr[i] === guess[i]){
                count += 1;
            }
        }
        return count;
    }

    inRange(playerInput){
        let guess = playerInput.split('').map(e => parseInt(e));
        let range = [1,2,3,4,5,6,7];
        return guess.every(e => range.includes(e))
    }

    // onChange(e) {
    //     this.setState({
    //         playerInput: this.state.playerInput.split('').map(e => parseInt(e))
    //     })
    // }


    handleSubmit(e) {
        e.preventDefault();
        const {compNumArr, playerInput} = this.state
        this.setState({
            try: this.state.try + 1,
            pastGuesses: this.state.pastGuesses.push(playerInput)
        })
        // let guess = playerInput.split('').map(e => parseInt(e))
        if (this.numExactMatches(e) === compNumArr.length) {
            this.setState({
                status: 'win'
            })
            return;
        } else {
            this.setState({
                lastMove: `You had ${this.numExactMatches(e)} exact matches. You have ${10 - this.state.try} tried left`
            })
        }

        if (this.inRange(e) === 'false') {
            this.setState({
                error: 'Value Must be between 0 and 7'
            });
        }
    }

    // update() {
    //     return e => this.setState({
    //         playerInput: e.currentTarget.value
    //     });
    // }

    render() {
        if (this.state.status === 'win') {
            return (
                <div>
                    <h1>WINNER WINNER!</h1>
                    <p>Computers Guess: {this.state.compNumArr}</p>
                    <p>Number of tries: {this.state.try}</p>
                    <button onClick={this.resetGame}> Play again</button>
                </div>
            )
        }

        if (this.state.status === 'fail'){
            return (
                <div>
                    <h1>BETTER LUCK NEXT TIME</h1>
                    <button onClick={this.getRandArr}> Play again </button>
                </div>
            )
        }
        return (
            <div>
                <h1>Mastermind</h1>
                <p>
                    <b>Intruction</b>
                    <br/>
                    Dont lose
                </p>
                <p></p>
                <input type="text" placeholder='Four numbers. 0-7' />
                <button onClick={this.handleSubmit}>Check</button>
            </div>
        )
    }       
}

export default GamePlay