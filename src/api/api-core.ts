import axios from 'axios';

export const apiCore = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  headers: {}
})
