import { call, put, takeLatest } from 'redux-saga/effects';
import { Alert } from 'react-native';
import * as actions from './actions';
import * as types from './types';
import * as weather from '../../../api/weather';

export function* getWather(payload) {
	yield put(actions.setLoading());

	const { data } = payload;

	try {
		const response = yield call(weather.getWather, data);

		if (response.data) {
			yield put(actions.setWeather(response.data));
		}
	} catch (error) {
		Alert.alert(JSON.stringify(error.response));
	}

	yield put(actions.setLoading());
}

export default function* watchWeahter() {
	yield takeLatest(types.GET_WEATHER, getWather);
}
