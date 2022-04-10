import { SET_WEATHER, SET_LOADING } from './types';

const initialState = {
	data: false,
	loading: false,
};

const weatherReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_WEATHER:
			return {
				...state,
				data: action.data,
			};
		case SET_LOADING:
			return {
				...state,
				loading: !state.loading,
			};
		default:
			return state;
	}
};

export default weatherReducer;
