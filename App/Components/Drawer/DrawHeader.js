import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'
import Avatar from './Avatar'
import { Colors, Metrics, Fonts } from '../../Themes'

class DrawerHeader extends React.Component {
  render () {
    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.root}
        underlayColor={Colors.primaryLightUnderlay}
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
    margin: Metrics.marginBase,
    paddingVertical: Metrics.paddingSmall,
    paddingHorizontal: Metrics.paddingBase,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginTop: Metrics.marginBase,
    marginLeft: Metrics.marginMedium,
  },
  title: {
    fontSize: Fonts.size.regular,
    color: Colors.secondary,
    fontWeight: 'bold',
  },
  sub: {
    marginTop: Metrics.marginSmall,
    color: Colors.secondary,
    fontSize: Fonts.size.medium,
  }
})

export default DrawerHeader
