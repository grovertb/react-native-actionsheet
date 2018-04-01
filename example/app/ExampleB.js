import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { ActionSheetCustom as ActionSheet } from './lib'

const CANCEL_INDEX = 0
const DESTRUCTIVE_INDEX = 4
const options = [
  'Cancel',
  'Apple',
  'Banana',
  'Watermelon',
  'Durian'
]
const title = 'Which one do you like?'
const message = 'In botany, a fruit is the seed-bearing structure in flowering plants (also known as angiosperms) formed from the ovary after flowering.'

class ExampleB extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      selected: ''
    }
    this.handlePress = this.handlePress.bind(this)
    this.showActionSheet = this.showActionSheet.bind(this)
  }

  showActionSheet () {
    this.ActionSheet.show()
  }

  handlePress (buttonIndex) {
    this.setState({ selected: buttonIndex })
  }

  render () {
    return (
      <View style={styles.wrapper}>
        <Text style={{marginBottom: 20}} >I like {options[this.state.selected] || '...'}</Text>
        <Text style={styles.button} onPress={this.showActionSheet}>Example B</Text>
        <ActionSheet
          ref={o => { this.ActionSheet = o }}
          title={title}
          message={message}
          options={options}
          cancelButtonIndex={CANCEL_INDEX}
          destructiveButtonIndex={DESTRUCTIVE_INDEX}
          onPress={this.handlePress}
          styles={{messageBox: { height: 60 }}}
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

export default ExampleB
