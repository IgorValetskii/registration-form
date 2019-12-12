import axios from 'axios';


export const axiosInstance = axios.create({
    baseURL: 'https://frontapi.vinchain.io/auth/api/',
    headers: {
      'Content-Type': 'application/json',
    },
});
