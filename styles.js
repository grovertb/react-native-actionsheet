'use strict';

import {StyleSheet, Dimensions, StatusBar} from 'react-native';


const {width, height} = Dimensions.get('window');

export const RADIUS = 10;

export const hairlineWidth = StyleSheet.hairlineWidth;


export default StyleSheet.create({
	wrapper: {
		width: width,
		height: height,
		position: 'absolute',
		right: 0,
		bottom: 0,
		left: 0,
		flexDirection: 'row'
	},
	overlay: {
		width: width,
		height: height,
		position: 'absolute',
		top: 0,
		right: 0,
		bottom: 0,
		left: 0,
		opacity: 0,
		backgroundColor: '#000'
	}
});

export const sheetStyle = StyleSheet.create({
	wrapper: {
		width: width,
		alignSelf: 'flex-end',
		backgroundColor: '#e5e5e5'
	},
	title: {
		height: 40,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	titleText: {
		color: '#8f8f8f',
		fontSize: 12
	}
});

export const btnStyle = StyleSheet.create({
	wrapper: {
		height: 50,
		marginTop: hairlineWidth,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 18
	}
});





