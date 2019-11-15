import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import Avatar from './Avatar'

class DrawerHeader extends React.Component {
  render () {
    const { icon } = this.props

    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.root}
        underlayColor='#DFECF3'
      >
        <View style={styles.container}>
          <Avatar />
          <View style={styles.content}>
            <Text style={styles.title}>{this.props.title}</Text>
            <Text style={styles.sub}>{this.props.sub}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
  },
  container: {
    margin: 8,
    paddingVertical: 4,
    paddingHorizontal: 8,
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
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: 8,
    marginLeft: 16,
  },
  title: {
    fontWeight: 'bold',
    color: '#2E637B',
    fontSize: 14,
  },
  sub: {
    marginTop: 4,
    color: '#2E637B',
    fontSize: 12,
  }
})

export default DrawerHeader
