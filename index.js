'use strict';

import React from 'react-native';
import _ActionSheetIOS from './ActionSheetIOS';
import _ActionSheetCustom from './ActionSheetCustom';

export const ActionSheetIOS     = _ActionSheetIOS;
export const ActionSheetCustom  = _ActionSheetCustom;

let ActionSheet;

if (React.Platform.OS === 'ios') {
	ActionSheet = ActionSheetIOS;
} else {
	ActionSheet = ActionSheetCustom;
}

export default ActionSheet;
