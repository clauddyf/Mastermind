import { combineReducer } from 'redux';
import NumbersReducer from './numbers_reducer'

const EntitiesReducer = combineReducer({
    numbers: NumbersReducer
});

export default EntitiesReducer;