import axios from 'axios';

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/api/v1' : 'https://fitness-api-cr5e.onrender.com', // adjust to your backend base URL
    withCredentials: process.env.NODE_ENV === 'development',  // send cookies with requests
    headers: {
        'Content-Type': 'application/json',
    },
});

export default api;
