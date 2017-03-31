import React from 'react'
import { View, Text, StyleSheet, Modal, ListView } from 'react-native'
import ActionSheet from 'react-native-actionsheet'
import { ActionSheetCustom } from 'react-native-actionsheet'

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 1
const options1 = [ '取消', '确认退出', '😄😄😄', '哈哈哈' ]
const options2 = [
  '取消', '确认退出', '😄😄😄', '哈哈哈',
  <Text style={{color: '#287373'}}>自定义内容</Text>
]

class Demo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: ''
    }
    this.handlePress = this.handlePress.bind(this)
    this.showActionSheet = this.showActionSheet.bind(this)
    this.showActionSheetCustom = this.showActionSheetCustom.bind(this)
  }

  showActionSheet() {
    this.ActionSheet.show()
  }

  showActionSheetCustom() {
    this.ActionSheetCustom.show()
  }

  handlePress(i) {
    this.setState({
      selected: i
    })
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text style={{marginBottom: 20}} >selected index: {this.state.selected}</Text>
        <Text style={styles.button} onPress={this.showActionSheet}>Show ActionSheet</Text>
        <Text style={styles.button} onPress={this.showActionSheetCustom}>Show Custom ActionSheet</Text>
        <ActionSheet
          ref={o => this.ActionSheet = o}
          title="确认要退出登录吗？"
          options={options1}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handlePress}
        />
        <ActionSheetCustom
          ref={o => this.ActionSheetCustom = o}
          title="确认要退出登录吗？"
          options={options2}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handlePress}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    width: 200,
    marginBottom: 10,
    paddingTop: 15,
    paddingBottom: 15,
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#38f'
  }
})

export default Demo






