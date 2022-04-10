export function getIconWeather(main) {
	switch (main) {
		case 'Thunderstorm':
			return {
				library: 'ionicons',
				name: 'md-thunderstorm-outline',
			};
		case 'Drizzle':
			return {
				library: 'feather',
				name: 'cloud-drizzle',
			};
		case 'Rain':
			return {
				library: 'ionicons',
				name: 'md-rainy-outline',
			};
		case 'Snow':
			return {
				library: 'ionicons',
				name: 'md-snow-sharp',
			};
		case 'Clear':
			return {
				library: 'ionicons',
				name: 'md-sunny-outline',
			};
		case 'Clouds':
			return {
				library: 'feather',
				name: 'cloud',
			};
		default:
			return {
				library: 'feather',
				name: 'align-center',
			};
	}
}
