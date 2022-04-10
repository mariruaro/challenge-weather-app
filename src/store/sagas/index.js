import { fork } from 'redux-saga/effects';
import watchWeahter from '../ducks/weather/sagas';

export default function* startForman() {
	yield fork(watchWeahter);
}
