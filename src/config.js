import axios from 'axios'


export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/'
});

export const baseURL = 'http://localhost:3000/'