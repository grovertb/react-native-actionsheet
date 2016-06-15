import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Modal, ListView
} from 'react-native';

import {ActionSheetCustom as ActionSheet} from 'react-native-actionsheet';
// import ActionSheet from 'react-native-actionsheet';

const buttons = [
    '取消', '确认退出', '😄😄😄', '哈哈哈',
];
const CANCEL_INDEX = 0;
const DESTRUCTIVE_INDEX = 1;

// console.log(Component)
// export default function () { return null;}

class Child extends Component {
    constructor(props) {
        super(props);
    }

    _handlePress(index) {
        console.log('index: ', index);
    }

    show() {
        this.ActionSheet.show();
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <Text style={styles.button} onPress={this.show.bind(this)}>SHOW</Text>

                <ActionSheet 
                    ref={(o) => this.ActionSheet = o}
                    title="确认要退出登录吗？"
                    options={buttons}
                    cancelButtonIndex={CANCEL_INDEX}
                    destructiveButtonIndex={DESTRUCTIVE_INDEX}
                    onPress={this._handlePress.bind(this)}
                >
                    <Text style={{color: 'red'}}>123</Text>
                    <Text style={{color: 'red'}}>123</Text>
                </ActionSheet>
            </View>
        );
    }
}

var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});

class RNActionSheet extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#fff', paddingBottom: 0}}>
                <ListView
                    dataSource={ds.cloneWithRows(['row 1', 'row 2'])}
                    renderRow={(data) => <Child />}
                >

                </ListView>
                <View style={{flex:1,height:200,backgroundColor:'blue'}}><Text>Bottom</Text></View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    wrapper: {
        flex: 1, 
        paddingBottom: 200, 
        alignItems: 'center', 
        justifyContent: 'center', 
        backgroundColor: 'red'
    },
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






