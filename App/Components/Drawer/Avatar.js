import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class Avatar extends React.Component {
  render () {
    const { icon } = this.props

    return (
      <TouchableHighlight
        style={styles.root}
        underlayColor='#DFECF3'
        onPress={this.props.onPress}
      >
        <View style={styles.container}>
          <Text style={styles.text}>G</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    borderRadius: 24,
    height: 48,
    width: 48
  },
  container: {
    backgroundColor: '#DFECF3',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    borderRadius: 24,
  },
  text: {
    color: '#2E637B',
    fontSize: 24,
    fontWeight: 'bold',
  }
})

export default Avatar
