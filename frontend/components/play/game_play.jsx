import React from 'react';

class GamePlay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            compNumArr: null,
            playerInput = '',
            try: 0,
            error: null,
            status: 'play',
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        // let guess = playerInput.split('').map(e => parseInt(e))
    }
    
    restGame() {
        if (this.state.status !== 'fail') {
            this.setState({
                playerInput = '',
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
        let guess = playerInput.split('').map(e => parseInt(e))
        let count = 0;
        for (let i = 0; i < guess.length; i++){
            if (compNumArr[i] === guess[i]){
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


    handleSubmit(e) {
        e.preventDefault();
        const {compNumArr, playerInput} = this.state
        this.setState({try: this.state.try + 1})
        let guess = playerInput.split('').map(e => parseInt(e))
        if (this.numExactMatches(e) === compNumArr.length) {
            this.setState({
                status: 'win'
            })
        }

        if (this.inRange(e) === 'false') {
            this.setState({
                error: 'Value Must be between 0 and 7'
            })
        }
    }

    update() {
        return e => this.setState({
            playerInput: e.currentTarget.value
        });
    }

    render() {
        return (

        )
    }
}