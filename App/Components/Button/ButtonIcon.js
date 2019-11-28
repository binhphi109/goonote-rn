import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Fonts, Colors } from '../../Themes'

export default class ButtonIcon extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    const { icon, iconSize, color, children, type, style, textBold } = this.props

    return (
      <TouchableOpacity style={[styles.button, style]}
        onPress={this.props.onPress}>
        <Icon name={icon} color={color} size={iconSize} />
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
  },
})
