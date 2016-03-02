/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import React, {
    AppRegistry,
    Component,
    StyleSheet,
    Text,
    View
} from 'react-native';

import ActionSheet from 'react-native-actionsheet';


const buttons = ['取消', '确认退出', '😄😄😄', '哈哈哈'];
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 1;


class RNActionSheet extends Component {

    _handlePress(index) {
    }

    show() {
        this.ActionSheet.show();
    }

    render() {
        return (
            <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Text style={styles.button} onPress={this.show.bind(this)}>SHOW</Text>

                <ActionSheet 
                    ref={(o) => this.ActionSheet = o}
                    title="确认要退出登录吗？"
                    options={buttons}
                    cancelButtonIndex={CANCEL_INDEX}
                    destructiveButtonIndex={DESTRUCTIVE_INDEX}
                    onPress={this._handlePress.bind(this)}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        width: 200,
        margin: 10,
        paddingTop: 15,
        paddingBottom: 15,
        color: '#fff',
        textAlign: 'center',
        backgroundColor: 'blue'
    }
});

export default RNActionSheet;






