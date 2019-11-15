import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

class DrawerItem extends React.Component {
  render () {
    const { icon } = this.props

    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.btnClickContain}
        underlayColor='#DFECF3'
      >
        <View style={styles.container}>
          <Icon name={icon} size={24} color='#2E637B' style={styles.icon}/>
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  btnClickContain: {
    flexDirection: 'row',
  },
  container: {
    margin: 8,
    paddingVertical: 4,
    paddingHorizontal: 16,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  icon: {
    textAlign: 'center',
    height: 24,
    width: 24
  },
  text: {
    color: '#2E637B',
    fontSize: 14,
    marginLeft: 24,
    marginTop: 4
  }
})

export default DrawerItem
