import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	Text,
	View,
	Alert,
	SafeAreaView,
	TouchableOpacity,
	ActivityIndicator,
} from 'react-native';
import * as Location from 'expo-location';
import Icon from '../../components/Icon';
import { weatherSelectors } from '../../store/selectors';
import { weatherActions } from '../../store/actions';
import { getIconWeather } from '../../lib/utils/functions';
import Colors from '../../lib/constants/colors';
import styles from './styles';

export default function App() {
	const dispatch = useDispatch();
	const loading = useSelector(weatherSelectors.getLoading);
	const data = useSelector(weatherSelectors.getData);

	const getLocation = async () => {
		const { status } = await Location.requestForegroundPermissionsAsync();
		if (status !== 'granted') {
			Alert.alert('Permission to access location was denied');
			return;
		}

		const location = await Location.getCurrentPositionAsync({});
		dispatch(
			weatherActions.getWeather({
				lon: location.coords.longitude,
				lat: location.coords.latitude,
			}),
		);
	};

	useEffect(() => {
		getLocation();
	}, []);

	const renderIcon = (main) => {
		const info = getIconWeather(main);

		return <Icon size={100} name={info.name} type={info.library} />;
	};
	return (
		<SafeAreaView style={styles.safe}>
			{loading ? (
				<View style={styles.containerLoading}>
					<ActivityIndicator size="large" color={Colors.white} />
				</View>
			) : (
				<View style={styles.container}>
					<View style={styles.rowRefresh}>
						<TouchableOpacity onPress={getLocation}>
							<Icon name="refresh" size={30} />
						</TouchableOpacity>
					</View>
					{data ? (
						<View style={styles.weatherView}>
							<View style={styles.header}>
								<View style={styles.viewIcon}>
									{renderIcon(data.weather[0].main)}
								</View>
								<View>
									<Text style={styles.temp}>{`${parseInt(
										data.main.temp,
										10,
									)} °C`}</Text>
									<Text style={styles.city}>{data.name}</Text>
								</View>
							</View>
							<View style={styles.infoView}>
								<View style={styles.row}>
									<Text style={styles.infoTxt}>
										Sensação térmica
									</Text>
									<Text style={styles.infoValue}>
										{`${parseInt(
											data.main.feels_like,
											10,
										)} °C`}
									</Text>
								</View>
								<View style={styles.row}>
									<Text style={styles.infoTxt}>
										Temperatura Mínima
									</Text>
									<Text style={styles.infoValue}>
										{`${parseInt(
											data.main.temp_min,
											10,
										)} °C`}
									</Text>
								</View>
								<View style={styles.row}>
									<Text style={styles.infoTxt}>
										Temperatura Máxima
									</Text>
									<Text style={styles.infoValue}>
										{`${parseInt(
											data.main.temp_max,
											10,
										)} °C`}
									</Text>
								</View>
								<View style={styles.row}>
									<Text style={styles.infoTxt}>Pressão</Text>
									<Text style={styles.infoValue}>
										{data.main.pressure}
									</Text>
								</View>
								<View style={styles.row}>
									<Text style={styles.infoTxt}>Umidade</Text>
									<Text style={styles.infoValue}>
										{data.main.humidity}
									</Text>
								</View>
							</View>
						</View>
					) : null}
				</View>
			)}
		</SafeAreaView>
	);
}
