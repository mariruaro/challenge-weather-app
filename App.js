import React from 'react';
import { Provider } from 'react-redux';
import { StatusBar } from 'expo-status-bar';
import HomeScreen from './src/screens/home';
import Colors from './src/lib/constants/colors';

import configureStore from './src/store';

export const store = configureStore();

export default function App() {
	return (
		<Provider store={store}>
			<HomeScreen />
			<StatusBar backgroundColor={Colors.background} />
		</Provider>
	);
}
