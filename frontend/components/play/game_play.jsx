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
      fetch('http://localhost:9000/testGenerator')
        .then(res => {res.json()})
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


    handleSubmit(e) {
        e.preventDefault();
        const {compNumArr, playerInput} = this.state
        this.setState({try: this.state.try + 1})

        if (this.state.)
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