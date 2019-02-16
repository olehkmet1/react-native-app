import axios from 'axios';
import { getToken } from '../store/operations/auth';

const BASE_URL = 'https://reqres.in/';

// const API_VERSION = 'v1';

function headers() {
    return {
        headers: {
            'Authorization': `Bearer ${getToken()}`,
            'Content-Type': 'application/json'
        }
    }
}

// function createUrl(url) {
//     return `${BASE_URL}/${url}`;
// }

//
// export function getCastles(data) {
//     const url = createUrl('auth/login');
//     return axios.post(url, data).then(
//         response => response.data
//     );
// }
