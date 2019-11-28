import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'

export default class ButtonText extends Component {
  static propTypes = {
    text: PropTypes.string,
    onPress: PropTypes.func,
    styles: PropTypes.object
  }

  render () {
    const { text, children, type, style, textStyle, textBold, color } = this.props

    return (
      <TouchableOpacity style={[styles.button, style]}
        onPress={this.props.onPress}>
        <Text style={[styles.text, textStyle, textBold && styles.textBold, { color }]}>
          {text}
        </Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
  },
  text: {
  },
  textBold: {
    fontWeight: 'bold'
  },
})
