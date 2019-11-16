import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

class Devider extends React.Component {
  render () {

    return (
      <View style={styles.root} />
    )
  }
}

const styles = StyleSheet.create({
  root: {
    width: '100%',
    backgroundColor: 'gray',
    height: StyleSheet.hairlineWidth
  },
})

export default Devider
