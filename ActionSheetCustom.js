'use strict';

import React, {
	View, Text, PropTypes
} from 'react-native';



class ActionSheet extends React.Component {
	
	constructor(props) {
		super(props);
	}

	show() {

	}

	render() {
		return (
			<View>

			</View>
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
	onPress: 				() => {}
};


export default ActionSheet;