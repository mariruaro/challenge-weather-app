import React from 'react';
import {
	Ionicons,
	Feather,
	MaterialIcons,
	MaterialCommunityIcons,
	FontAwesome,
	Foundation,
	FontAwesome5,
	EvilIcons,
	Entypo,
	MaterialCommunityIcons
} from '@expo/vector-icons';
import PropTypes from 'prop-types';

import Colors from '../../lib/constants/colors';

function Icon({ size, type, name, color, style }) {
	let Component;

	switch (type) {
		case 'ionicons':
			Component = Ionicons;
			break;
		case 'fontAwesome5':
			Component = FontAwesome5;
			break;
		case 'evil':
			Component = EvilIcons;
			break;
		case 'entypo':
			Component = Entypo;
			break;
		case 'feather':
			Component = Feather;
			break;
		case 'materialIcons':
			Component = MaterialIcons;
			break;
		case 'foundation':
			Component = Foundation;
			break;
		case 'materialCommunity':
			Component = MaterialCommunityIcons;
			break;
		case 'fontAwesome':
			Component = FontAwesome;
			break;
		default:
			break;
	}

	return <Component name={name} size={size} color={color} style={style} />;
}

Icon.propTypes = {
	size: PropTypes.number,
	type: PropTypes.string,
	name: PropTypes.string.isRequired,
	color: PropTypes.string,
	style: PropTypes.shape({}),
};

Icon.defaultProps = {
	size: 24,
	type: 'materialCommunity',
	color: Colors.white,
	style: {},
};

export default Icon;
