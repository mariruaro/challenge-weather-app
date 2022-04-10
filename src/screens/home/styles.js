import { StyleSheet, Platform } from 'react-native';
import Colors from '../../lib/constants/colors';

const styles = StyleSheet.create({
	city: {
		color: Colors.white,
		fontSize: 20,
	},
	container: {
		flex: 1,
		paddingHorizontal: 20,
		paddingVertical: 30,
	},
	containerLoading: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	header: {
		alignItems: 'center',
		flexDirection: 'row',
		paddingBottom: 80,
	},
	infoTxt: {
		color: Colors.white,
		fontSize: 14,
		width: '70%',
	},
	infoValue: {
		color: Colors.white,
		fontSize: 14,
		fontWeight: Platform === 'ios' ? '600' : 'bold',
	},
	infoView: {
		backgroundColor: Colors.backgroundTwo,
		borderRadius: 5,
		padding: 10,
	},
	row: {
		flexDirection: 'row',
		padding: 10,
	},
	rowRefresh: {
		alignItems: 'flex-end',
	},
	safe: {
		backgroundColor: Colors.background,
		flex: 1,
	},
	temp: {
		color: Colors.white,
		fontSize: 40,
		fontWeight: Platform === 'ios' ? '600' : 'bold',
	},
	viewIcon: {
		alignItems: 'center',
		justifyContent: 'center',
		width: '50%',
	},
	weatherView: {
		flex: 0.9,
		justifyContent: 'center',
	},
});

export default styles;
