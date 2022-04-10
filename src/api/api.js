import axios from 'axios';
import { BASE_API } from '../config/env';

const api = axios.create({
	baseURL: BASE_API,
	headers: {
		'Content-Type': 'application/json',
		Accept: 'application/json',
	},
	timeout: 3000,
});

export default api;
