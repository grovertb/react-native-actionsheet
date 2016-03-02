'use strict';

import React from 'react-native';
import ActionSheetIOS from './ActionSheetIOS';
import ActionSheetCustom from './ActionSheetCustom';

let ActionSheet;

if (React.Platform.OS === 'ios') {
	ActionSheet = ActionSheetIOS;
} else {
	ActionSheet = ActionSheetCustom;
}

export default ActionSheet;
