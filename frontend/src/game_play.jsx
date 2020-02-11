import React from 'react';

class GamePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compNumArr: null,
            playerInput: '',
            try: 0,
            error: null,
            status: 'choose',
            lastMove: 'Guess four numbers between 0 and 7',
            pastGuesses: [],
            score: 0,
            difficulty: ['easy','hard']
        }
        this.handleSubmit = this.handleSubmit.bind(this); // Binding functions in the constructor, so I can use them in the render function
        this.resetGame = this.resetGame.bind(this);
        this.getRandArr = this.getRandArr.bind(this);
        this.update = this.update.bind(this);
        this.numExactMatches = this.numExactMatches.bind(this);
        this.guess = this.guess.bind(this);
        this.scoreKeep = this.scoreKeep.bind(this)
        this.setsDifficulty = this.setsDifficulty.bind(this)
    }


    // The reset function sets the state based off of the status object of the state. Main differences, if you win, we increment the score. 
    resetGame() {
        if (this.state.status === 'win') {
            this.setState({
                playerInput: '',
                try: 0,
                error: null,
                compNumArr: this.getRandArr(),
                status: 'play',
                pastGuesses: [],
                score: this.state.score + this.scoreKeep()
            })
        } else if (this.state.status === 'fail') {
            this.setState({
                playerInput: '',
                try: 0,
                error: null,
                compNumArr: this.getRandArr(),
                status: 'play',
                pastGuesses: [],
                score: 0
            })
        } else {
            this.setState({
                compNumArr: this.getRandArr(),
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

    // The way to keep score is to simply subtract 10 from the amount of attempts, and multiply it by ten

    scoreKeep() {
        return (10 - this.state.try) * 10
    }

    // The reason for the getRandarr() function is for us to make an external api call using our backend route
    // The reason a backend was implemented because the api isnt cors enabled, so I had to install the cors module
    // and use it on express, so I could call it from the frontend.
    // When we get out response, we send a promise text object, and then we use that data to set to the compNumArr key.
    // We also set other parameters in the state back to default, since it is being used
    // with the resetGame function


    getRandArr() {
        if(this.state.difficulty === this.state.difficulty[1]){
            fetch('http://localhost:9000/randomGen')
                .then(res => res.json())
                .then(data => this.setState({
    
                    compNumArr: data,
                    status: 'play',
                    try: 0,
                    lastMove: 'Guess four numbers between 0 and 7',
                    error: null,
                    pastGuesses: [],
                }))
                .catch(err => {
                    this.setState({ status: 'fail' })
                });
        } else {
            fetch('http://localhost:9000/lvTwo')
            .then(res => res.json())
            .then(data => this.setState({

                compNumArr: data,
                status: 'play',
                try: 0,
                lastMove: 'Guess three numbers between 0 and 4',
                error: null,
                pastGuesses: [],
            }))
            .catch(err => {
                this.setState({ status: 'fail' })
            });
        }
    }

    // getlvTwo(){
    //     fetch('http://localhost:9000/lvTwo')
    //         .then(res => res.json())
    //         .then(data => this.setState({

    //             compNumArr: data,
    //             status: 'play',
    //             try: 0,
    //             lastMove: 'Guess three numbers between 0 and 4',
    //             error: null,
    //             pastGuesses: [],
    //         }))
    //         .catch(err => {
    //             this.setState({ status: 'fail' })
    //         });
    // }
    // once the component is mounted, we call our getRandArr() function
    // componentDidMount() {
    //     this.getRandArr();
    // }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.status === 'win') {
            this.getRandArr();
        }
    }

    // this function will take in the users string input, and turn it into an array of integer strings
    guess() {
        debugger
        return this.state.playerInput.split('')
    }
    // this function returns a count for exact matches between the computer generated array, and the uses array. Iterates through guess,
    // and checks to see if the computer element is the same at the same index
    numExactMatches() {

        let count = 0;
        for (let i = 0; i < this.guess().length; i++) {
            if (this.state.compNumArr[i] === this.guess()[i]) {
                count += 1;
            }
        }
        return count;
    }

    //The function below checks three conditions.
    // If the count returned from the function above is equal to the computer array length
    // we set the status to win. If there amount of tries are equal to 9, that means they failed, in which we change
    // the status to fail, keep the past guesses, and sets the player input to an empty string
    // And the last conditional is the status still being in 'play', and displaying their lastMove
    matchesResponse() {
        let compNumArr = this.state.compNumArr;

        if (this.numExactMatches(this.guess()) === compNumArr.length) {
            this.setState({
                status: 'win'
            })
            return;
        } else if (this.state.try === 9) {
            this.setState({
                status: 'fail',
                pastGuesses: this.guessArray(),
                playerInput: ''
            })
        } else {
            this.setState({
                lastMove: `You had ${this.numExactMatches()} exact matches. You have ${9 - this.state.try} tries left`,
                pastGuesses: this.guessArray(),
                playerInput: ''
            })
        }
    }


    // The function below returns a two element array consisting of booleans
    // the 0th index is checking to see if every element in the players guess is in the range specified
    // the second boolean is checking to see if the user only inputs four integers


    inRange() {
        if(this.state.difficulty === this.state.difficulty[1]){
            let arr = [];
            let range = ['0', '1', '2', '3', '4', '5', '6', '7'];
            arr.push(this.guess().every(e => range.includes(e)))
            arr.push(this.guess().length === 4)
    
            return arr
        } else {
            let arr = [];
            let range = ['0', '1', '2', '3', '4'];
            arr.push(this.guess().every(e => range.includes(e)))
            arr.push(this.guess().length === 3)
    
            return arr
        }
    }

    //The function below checks all combinations of what we could get from our inRange function
    // And with each combination, we set the error according to if they had the correct length but out of range digit,
    // And if the players guess satisfies both conditions ([true,true]), we dont return an error.
    errorHandler() {
        let fT = this.inRange(this.guess())[0] === false && this.inRange(this.guess())[1] === true;
        let tF = this.inRange(this.guess())[0] === true && this.inRange(this.guess())[1] === false;
        let fF = this.inRange(this.guess())[0] === false && this.inRange(this.guess())[1] === false;

        if (fT) {
            this.setState({
                error: 'Error: Value Must be between 0 and 7',
                try: this.state.try + 1
            });
            return;
        } else if (tF) {
            this.setState({
                error: 'Error: Whoaa there speedracer! Enter Four integers',
                try: this.state.try + 1
            });
            return;
        } else if (fF) {
            this.setState({
                error: 'Error: The instructions should be displayed above. Sorry for the incovienence, please enter four numbers between 0 and 7.',
                try: this.state.try + 1
            });
            return;
        } else {
            this.setState({
                try: this.state.try + 1,
                error: null
            })
        }
    }

    // This function pushes the users input into an array. We do not split the input string so that
    // it would render a better picture on the page
    guessArray() {
        let arr = this.state.pastGuesses;
        let playerInput = this.state.playerInput
        arr.push(playerInput);
        return arr
    }

    // the handleSubmit function calls the matchesResponse and error handler functions
    // the preventDefault function prevents us from submitting a form
    handleSubmit(e) {
        e.preventDefault();
        this.matchesResponse()
        this.errorHandler()
    }
    //this update function sets the state of the player input. 
    // it identifies the currentTarget of the event and makes the changes
    update() {
        return e => this.setState({
            playerInput: e.currentTarget.value
        });
    }

    setsDifficulty(e){
        this.setState({
            difficulty: e.target.value
        })
        this.getRandArr()

    }

    // The render statement provides different html based on the states status. 
    // If they win, we show them the secret code and number of attemptes
    // If they lose, we show them the correct combination, and have the play again button that calls reset function
    // based on the states status
    // And if the status is play, it returns the papa div


    render() {
        if (this.state.status === 'win') {
            return (
                <div className='winnerdiv'>
                    <h1 className='headers'>WINNER WINNER!</h1>
                    <div className='moveMessages'>Secret Code: {this.state.compNumArr}</div>
                    <div className='moveMessages'>Your Guess: {this.state.compNumArr}</div>
                    <div className='moveMessages'>Number of attempts: {this.state.try}</div>
                    <div className='againButton'>
                        <button className='checkButton' onClick={this.resetGame}>Play again</button>
                    </div>
                </div>
            )
        } else if (this.state.status === 'fail') {
            return (
                <div className='loserdiv'>
                    <h1 className='headers' >BETTER LUCK NEXT TIME</h1>
                    <div className='loserMessage'>
                        <span>
                            Your memory isn't quite there.
                        </span>
                        <span>
                            The correct combination was {this.state.compNumArr}
                        </span>
                    </div>
                    <div className='againButton'>
                        <button className='playAgain' onClick={this.resetGame}> Play again </button>
                    </div>
                </div>
            )
        } else if (this.state.status === 'choose'){
            return(
                <div className='chooseDiv'>
                    <div className='lilChoose'>
                            Please choose difficulty
                    </div>
                    <div className='radioDiv' >
                        <form action="" className='selectorDiv'>
                            <input className='inputOptionse' type="radio"  value="easy"
                                    onChange={this.setsDifficulty}/>
                            <label for="easy">Easy</label>
                            <input className='inputOptions' type="radio"  value="hard"
                                    onChange={this.setsDifficulty}/>
                            <label for="hard">Hard</label>
                        </form>
                    </div>
                </div>
            )
        } else {
            return (
                <div className='papa-div'>
                    <div className='backgroundImg'>
                        <div className='instructions'>
                            <h1 className='headers'>Mastermind</h1>
                            <div>Intructions:</div>
                            <br />
                            <div>
                                <div>
                                    Feel like you're getting old? Test the strength of the old noggin with Mastermind!
                            </div>
                                <div>
                                    This is a game in which the user should guess a combination of 4 numbers, ranging from 0-7.
                            </div>
                                <div>
                                    This game will provide feedback when you get an exact number, and its position.
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className='lilpapi-div'>
                        <div className='rightSide'>
                            <div className='stickyResults'>
                                <div className='errorMessages'>{this.state.error}</div>
                            </div>
                            <div className='guesses'>
                                <h1>List of Guesses:</h1>
                                {this.state.pastGuesses.map(guess => <li className='listGuesses'>{guess}</li>)}
                            </div>
                        </div>
                        <div className='playerGuess'>
                            <div className='lastMove'>{this.state.lastMove}</div>
                            <form action="" className='inputsnum'>
                                <input className='numInput' type="text" placeholder='Four numbers. 0-7' value={this.state.playerInput} onChange={this.update('playerInput')} />
                                <button className='checkButton' onClick={this.handleSubmit}>Check</button>
                            </form>
                        </div>
                        <div className='scoreDiv'>
                            Score:
                        <div>
                                {this.state.score}
                            </div>
                            <div>
                                <button className='resetButt' onClick={this.resetGame}>Reset</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default GamePlay