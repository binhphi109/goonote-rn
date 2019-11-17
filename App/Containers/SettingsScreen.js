import React, { Component } from 'react'
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts } from '../Themes'
import Button from '../Components/Button/Button'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class SettingsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Settings',
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 10, padding: 10 }} onPress={() => navigation.navigate('Main')}>
        <Icon
          name='chevron-left'
          size={24}
        />
      </TouchableOpacity>
    )
  });

  render () {
    return (
      <View style={styles.container}>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  }
})
