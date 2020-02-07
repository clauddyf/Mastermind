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
        this.update = this.update.bind(this);
        this.numExactMatches = this.numExactMatches.bind(this)
        debugger
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
        .then(res => res.json())
        .then(data => this.setState({
            
            compNumArr: data,
            status:'play',
            try: 0,
            lastMove: 'Guess four numbers between 0 and 7',
            error:null
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
        // debugger
        playerInput = this.state.playerInput;
        let guess = playerInput.split('')
        let count = 0;
        for (let i = 0; i < guess.length; i++){
            if (this.state.compNumArr[i] === guess[i]){
                count += 1;
            }
        }
        return count;
    }

    inRange(playerInput){
        let arr = [];
        playerInput = this.state.playerInput;
        let guess = playerInput.split('');
        let range = ['0','1','2','3','4','5','6','7'];
        arr.push(guess.every(e => range.includes(e)))
        arr.push(guess.length === 4)
        debugger
        return arr
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        const {compNumArr, playerInput} = this.state;
        this.setState({
            try: this.state.try + 1,
        })
        if (this.numExactMatches(playerInput) === compNumArr.length) {
            this.setState({
                status: 'win'
            })
            return;
        } else if (this.state.try === 10){
            this.setState({
                status:'fail'
            })
        } else 
            {
            this.setState({
                lastMove: `You had ${this.numExactMatches(e)} exact matches. You have ${9 - this.state.try} tries left`,
                // pastGuesses: this.state.pastGuesses.push(playerInput)
            })
        }
        debugger
        if ((this.inRange(playerInput)[0] === false && this.inRange(playerInput)[1] === true )) {
            this.setState({
                error: 'Value Must be between 0 and 7',
                // pastGuesses: this.state.pastGuesses.push(playerInput)
            });
            return;
        } else if (this.inRange(playerInput)[0] === true && this.inRange(playerInput)[1] === false){
            this.setState({
                error: 'Whoaa there speedracer! Just four integers',
                // pastGuesses: this.state.pastGuesses.push(playerInput)
            });
            return;
        } else if (this.inRange(playerInput)[0] === false && this.inRange(playerInput)[1] === false){
            this.setState({
                error: 'The instructions should be displayed above. Sorry for the incovienence, please enter four numbers between 0 and 7.',
                // pastGuesses: this.state.pastGuesses.push(playerInput)
            });
            return;
        }
    }

    update() {
        return e => this.setState({
            playerInput: e.currentTarget.value
        });
    }
    

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
        } else if (this.state.status === 'fail'){
            return (
                <div>
                    <h1>BETTER LUCK NEXT TIME</h1>
                    <button onClick={this.getRandArr}> Play again </button>
                </div>
            )
        } else {
        return (
            <div>
                <h1>Mastermind</h1>
                <p>
                    <b>Intruction</b>
                    <br/>
                    Dont lose
                </p>
                <p>{this.state.lastMove}</p>
                <p>{this.state.error}</p>
                <input type="text" placeholder='Four numbers. 0-7' onChange={this.update('playerInput')}/>
                <button onClick={this.handleSubmit}>Check</button>
            </div>
        )}
    }       
}

export default GamePlay