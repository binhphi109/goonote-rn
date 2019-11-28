import React from 'react'
import { TouchableHighlight, Text, View, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Colors, Fonts, Metrics } from '../../Themes'

class DrawerItem extends React.Component {
  render () {
    const { icon } = this.props

    return (
      <TouchableHighlight
        onPress={this.props.onPress}
        style={styles.root}
        underlayColor={Colors.primaryLightUnderlay}
        >
        <View style={styles.container}>
          <Icon name={icon} size={Metrics.icons.large} color={Colors.secondary} style={styles.icon} />
          <Text style={styles.text}>{this.props.title}</Text>
        </View>
      </TouchableHighlight>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row'
  },
  container: {
    margin: Metrics.marginBase,
    paddingVertical: Metrics.paddingSmall,
    paddingHorizontal: Metrics.paddingMedium,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-start'
  },
  icon: {
    textAlign: 'center',
    height: Metrics.icons.large,
    width: Metrics.icons.large
  },
  text: {
    color: Colors.secondary,
    fontSize: Fonts.size.regular,
    marginLeft: Metrics.marginBig,
    marginTop: Metrics.marginSmall
  }
})

export default DrawerItem
