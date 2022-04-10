import * as types from './types';

export const getWeather = (data) => ({
	type: types.GET_WEATHER,
	data,
});

export const setWeather = (data) => ({
	type: types.SET_WEATHER,
	data,
});

export const setLoading = () => ({
	type: types.SET_LOADING,
});

export default {
	getWeather,
	setWeather,
	setLoading,
};
