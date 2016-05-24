import React, {Component, PropTypes} from 'react';
import {
	Text, View, StyleSheet, 
	Modal, TouchableHighlight, Animated
} from 'react-native';

import styles, {btnStyle, sheetStyle} from './styles';


const BUTTON_H 				= 50;
const WARN_COLOR 			= '#ff3b30';


class ActionSheet extends Component {

	constructor(props) {
		super(props);
		this.translateY = this._calculateHeight();
		this.state = {
			visible: false,
			sheetAnim: new Animated.Value(this.translateY)
		};
	}
	
	show() {
		this.setState({visible: true});
		this._showSheet();
	}

	hide(index) {
		this._hideSheet(() => {
			this.setState({visible: false});
			this.props.onPress(index);
		});
	}

	_showSheet() {
		Animated.timing(this.state.sheetAnim, {
			toValue: 0,
			duration: 250
		}).start();
	}

	_hideSheet(callback) {
		Animated.timing(this.state.sheetAnim, {
			toValue: this.translateY,
			duration: 150
		}).start(callback || function() {});
	}

	_calculateHeight() {
		let count = this.props.options.length;
		if (this.props.title) count += 1; 
		return BUTTON_H * count + 20;
	}

	_renderTitle() {
		if (this.props.title) {
			return (
				<View style={sheetStyle.title}>
					<Text style={sheetStyle.titleText}>{this.props.title}</Text>
				</View>	
			);
		} else {
			return null;
		}
	}

	_renderCancelButton() {
		let {options, cancelButtonIndex, tintColor} = this.props;
		if (cancelButtonIndex > -1 && options[cancelButtonIndex]) {
			return (
				<TouchableHighlight 
					activeOpacity={1} 
					underlayColor="#f4f4f4" 
					style={[btnStyle.wrapper, {marginTop: 6}]} 
					onPress={this.hide.bind(this, cancelButtonIndex)}
				>
					<Text style={[btnStyle.title, {fontWeight: '700', color: tintColor}]}>{options[cancelButtonIndex]}</Text>
				</TouchableHighlight>
			);
		} else {
			return null;
		}
	}

	_createButton(title, fontColor, index, style) {
		return (
			<TouchableHighlight 
				key={index}
				activeOpacity={1} 
				underlayColor="#f4f4f4" 
				style={[btnStyle.wrapper, style || {}]} 
				onPress={this.hide.bind(this, index)}
			>
				<Text style={[btnStyle.title, {color: fontColor}]}>{title}</Text>
			</TouchableHighlight>
		);
	}

	_renderOptions() {
		let {options, tintColor, cancelButtonIndex, destructiveButtonIndex} = this.props;
		return options.map((title, index) => {
			let fontColor = destructiveButtonIndex === index ? WARN_COLOR : tintColor;
			return index === cancelButtonIndex ? null : this._createButton(title, fontColor, index);
		});
	}

	render() {
		let state = this.state;

		return (
			<Modal 
				visible={this.state.visible}
				transparent={true}
				animationType="none"
				onRequestClose={() => {}}
			>
				<View style={sheetStyle.wrapper}>
					<Text style={styles.overlay} onPress={() => this.hide()}></Text>
					<Animated.View 
						style={[sheetStyle.bd, {transform: [{translateY: state.sheetAnim}]}]}
					>
						<View style={sheetStyle.options}>
							{this._renderTitle()}
							{this._renderOptions()}
						</View>	
						{this._renderCancelButton()}
					</Animated.View>
				</View>	
			</Modal>
		);
	}
}


ActionSheet.propTypes = {
	title: 					PropTypes.string,
	options: 				PropTypes.array.isRequired,
	tintColor: 				PropTypes.string,
	cancelButtonIndex: 		PropTypes.number,
	destructiveButtonIndex: PropTypes.number,
	onPress: 				PropTypes.func
};


ActionSheet.defaultProps = {
	tintColor: 				'#007aff',
	onPress: 				() => {}
};


export default ActionSheet;
