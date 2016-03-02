'use strict';

import {StyleSheet, Dimensions} from 'react-native';


const {width, height} = Dimensions.get('window');
const RADIUS = 10;


export const hairlineWidth = StyleSheet.hairlineWidth;


export default StyleSheet.create({
	wrapper: {
		width: width,
		height: height,
		position: 'absolute',
		top: 0,
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
		paddingLeft: 10,
		paddingRight: 10,
		paddingBottom: 10,
		alignSelf: 'flex-end'
	},
	title: {
		paddingTop: 15,
		paddingBottom: 15,
		color: '#8f8f8f',
		fontSize: 12,
		textAlign: 'center'
	},
	options: {
		borderRadius: RADIUS,
		overflow: 'hidden',
		backgroundColor: '#fff'
	}
});

export const btnStyle = StyleSheet.create({
	wrapper: {
		height: 50,
		borderRadius: RADIUS,
		borderTopWidth: hairlineWidth,
		borderColor: '#dbdbdf',
		overflow: 'hidden',
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#fff'
	},
	title: {
		fontSize: 18
	}
});





