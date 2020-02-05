import { RECEIVE_RANDOM_NUMBERS} from '../actions/numbers_actions;'

const NumbersReducer = (oldState = {}, action) => {
    Object.freeze(oldState);
    
    switch(action.type) {
        case RECEIVE_RANDOM_NUMBERS:
            return Object.assign({},action.numbers)
        default:
            return oldState;
    }
};

export default NumbersReducer;