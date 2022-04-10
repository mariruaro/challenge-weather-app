import api from './api';
import { API_KEY } from '../config/env';

export const getWather = (data) =>
	api.get(`/weather`, {
		params: { ...data, units: 'metric', appid: API_KEY },
	});
