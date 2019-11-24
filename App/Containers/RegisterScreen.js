import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet} from 'react-native'
import _ from 'lodash/fp'
import { Images, Metrics, Colors, Fonts } from '../Themes'
import Button from '../Components/Button/Button'
import { setToPath } from '../Lib/Utils/JsonUtils'
import UserActions from '../Redux/UserRedux'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  register: UserActions.register
}, dispatch)

const initialState = {
  item: {
    email: null,
    username: null,
    password: null
  },
  dirty: false
}

class RegisterScreen extends Component {
  state = {
    ...initialState
  }

  handleChange = (name, value) => {
    const { item } = this.state
    const newItem = _.cloneDeep(item)

    setToPath(newItem, name, value)

    this.setState({
      item: newItem,
      dirty: true
    })
  }

  handleRegister = () => {
    const { item } = this.state

    this.props.register(item.email, item.username, item.password).then((result) => {
      this.reset()
      this.props.navigation.navigate('App')
    }).catch(error => {
      alert('Cannot register')
    })
  }

  reset = () => {
    this.setState({
      ...initialState
    })
  }

  handleLogin = () => {
    this.props.navigation.navigate('Login')
  }

  render () {
    const { item } = this.state

    return (
      <KeyboardAvoidingView style={styles.containerView} behavior='padding'>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.logoText}>goonote</Text>
            <TextInput
              placeholder='Email'
              style={styles.input}
              value={item.email}
              autoCapitalize='none'
              onChangeText={text => this.handleChange('email', text)}
              />
            <TextInput
              placeholder='Username'
              style={styles.input}
              value={item.username}
              autoCapitalize='none'
              onChangeText={text => this.handleChange('username', text)}
              />
            <TextInput
              placeholder='Password'
              style={styles.input}
              value={item.password}
              autoCapitalize='none'
              onChangeText={text => this.handleChange('password', text)}
              secureTextEntry
              />
            <Button
              style={styles.register}
              text='Register'
              type='primary'
              onPress={this.handleRegister}
            />
            <Button
              style={styles.login}
              text='Login'
              type='secondary'
              onPress={this.handleLogin}
            />
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1
  },
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#2c3e50'
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
    color: '#2980b6'
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    borderRadius: 2,
    color: '#fff'
  },
  register: {
    marginBottom: 10
  },
  login: {
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(RegisterScreen)
