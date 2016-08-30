import React from 'react'
import {
  View,
  Text
} from 'react-native'
import Button from 'react-native-button'
import styles from './Styles/CounterRow.Style.js'
import {observer} from 'mobx-react/native'

@observer
class CounterRow extends React.Component {
  render () {
    let counter = this.props.store.counter
    return (
      <View style={styles.container}>
        <Text>Counter: {counter.count}</Text>
        <Text>  Total clicks: {counter.total}</Text>
        <Button onPress={counter.increase}>  +</Button>
        <Button onPress={counter.decrease}>  -</Button>
      </View>
    )
  }
}

export default CounterRow