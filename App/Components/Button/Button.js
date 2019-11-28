import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Fonts, Colors, Metrics } from '../../Themes'

export default class Button extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    const { text, children, type } = this.props

    const primary = type === 'primary'
    const secondary = type === 'secondary'

    return (
      <TouchableOpacity style={[styles.button, secondary && styles.buttonSecondary, this.props.style]}
        onPress={this.props.onPress}>
        {text ? 
          <Text style={[styles.text, secondary && styles.textSecondary, styles.text[type]]}>
            {text && text.toUpperCase()}
          </Text>
          : children
        }
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: Metrics.paddingMedium,
    borderRadius: Metrics.borderRadius,
    backgroundColor: Colors.secondary,
  },
  buttonSecondary: {
    backgroundColor: Colors.primaryLight,
  },
  text: {
    ...Fonts.style.button,
    color: Colors.primary,
    textAlign: 'center',
  },
  textSecondary: {
    color: Colors.white,
  }
})
