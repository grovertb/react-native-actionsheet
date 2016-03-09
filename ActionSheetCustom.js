'use strict';

import React, {
	View, Text, PropTypes, Dimensions, Animated, TouchableHighlight, TouchableWithoutFeedback
} from 'react-native';

import styles, {btnStyle, sheetStyle, RADIUS} from './styles';


const {width, height} = Dimensions.get('window');
const BUTTON_H = 50;
const DURATION = 250;
const WARN_COLOR = '#ff3b30';



class ActionSheet extends React.Component {
	
	constructor(props) {
		super(props);

		this.translateY = this._calculateHeight();

		this.state = {
			visible: false,
			fadeAnim: new Animated.Value(0),
			sheetAnim: new Animated.Value(this.translateY)
		};
	}

	show() {
		this.setState({visible: true});
		this._showOverlay();
		this._showSheet();
	}

	hide(index) {
		this._hideOverlay(() => this.setState({visible: false}));
		this._hideSheet();
		this.props.onPress(index);
	}

	_showOverlay() {
		Animated.timing(this.state.fadeAnim, {
			toValue: 0.4,
			duration: DURATION
		}).start();
	}

	_hideOverlay(callback) {
		Animated.timing(this.state.fadeAnim, {
			toValue: 0,
			duration: DURATION
		}).start(callback || function() {});
	}

	_showSheet() {
		Animated.timing(this.state.sheetAnim, {
			toValue: 0,
			duration: DURATION
		}).start();
	}

	_hideSheet(callback) {
		Animated.timing(this.state.sheetAnim, {
			toValue: this.translateY,
			duration: DURATION
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

		if (state.visible === false) {
			return null;
		} else {
			return (
				<View style={styles.wrapper}>
					<TouchableWithoutFeedback onPress={this.hide.bind(this)}>
						<Animated.View style={[styles.overlay, {opacity: state.fadeAnim}]}></Animated.View>
					</TouchableWithoutFeedback>	
					<Animated.View 
						ref={o => this.sheet = o} 
						style={[sheetStyle.wrapper, {transform: [{translateY: state.sheetAnim}]}]}
					>
						<View style={sheetStyle.options}>
							{this._renderTitle()}
							{this._renderOptions()}
						</View>	
						{this._renderCancelButton()}
					</Animated.View>
				</View>
			);
		}
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





