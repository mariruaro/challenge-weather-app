import { combineReducers } from 'redux';
import weatherReducer from '../ducks/weather';

const rootReducer = combineReducers({
	weather: weatherReducer,
});

export default rootReducer;
