import axios from 'axios';

export const getRandomNums = num => {
    return axios.get('/api/testGenerator')
}