import axios from 'axios';
import {apiUrl} from '../config/Config';

export const HTTPInstance = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json',
  },
});
