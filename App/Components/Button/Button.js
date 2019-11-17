import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { Fonts, Colors } from '../../Themes'

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
    backgroundColor: '#2980b6',
    borderRadius: 2,
    paddingVertical: 15
  },
  buttonSecondary: {
    backgroundColor: '#fff'
  },
  text: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '700'
  },
  textSecondary: {
    color: '#000'
  }
})
