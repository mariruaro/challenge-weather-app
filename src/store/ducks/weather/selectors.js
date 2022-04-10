export const getData = (state) => state.weather.data;
export const getLoading = (state) => state.weather.loading;

export default {
	getData,
	getLoading,
};
