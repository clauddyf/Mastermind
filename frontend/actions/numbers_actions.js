import { getRandomNums } from '../util/numbers_api_utl';
export const RECEIVE_RANDOM_NUMBERS = 'RECEIVE_RANDOM_NUMBERS';

export const receiveRandomNumbers = numbers => ({
    type: RECEIVE_RANDOM_NUMBERS,
    numbers
})