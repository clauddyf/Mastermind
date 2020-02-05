import { connect } from 'react-redux';
import {receiveRandomNumbers} from '../../actions/numbers_actions';
import GamePlay from './game_play';

const mSTP = (state,ownProps) => {
    return ({
        numbers: state.entities.numbers
    })
}

const mDTP = dispatch => ({
    receiveRandomNumbers: (numbers) => dispatch(receiveRandomNumbers(numbers))
})

export default connect(mSTP,mDTP)(GamePlay)