import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import _ from 'lodash/fp'
import { Images, Metrics, Colors, Fonts } from '../Themes'
import Button from '../Components/Button/Button'
import { setToPath } from '../Lib/Utils/JsonUtils'
import UserActions from '../Redux/UserRedux'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  login: UserActions.login
}, dispatch)

const initialState = {
  item: {
    username: null,
    password: null
  },
  dirty: false
}

class LoginScreen extends Component {

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

  handleLogin = () => {
    const { item } = this.state

    this.props.login(item.username, item.password).then((result) => {
      this.reset()
      this.props.navigation.navigate('App')
    }).catch(error => {
      alert('Cannot login')
    })
  }

  handleRegister = () => {
    this.reset()
    this.props.navigation.navigate('Register')
  }

  reset = () => {
    this.setState({
      ...initialState
    })
  }

  render () {
    const { username, password } = this.state

    return (
      <KeyboardAvoidingView style={styles.containerView} behavior='padding'>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.logoText}>goonote</Text>
            <TextInput
              placeholder='Username'
              style={styles.input}
              value={username}
              autoCapitalize='none'
              onChangeText={text => this.handleChange('username', text)}
              />
            <TextInput
              placeholder='Password'
              style={styles.input}
              value={password}
              autoCapitalize='none'
              onChangeText={text => this.handleChange('password', text)}
              secureTextEntry
              />
            <Button
              style={styles.login}
              text='Login'
              type='primary'
              onPress={this.handleLogin}
            />
            <Button
              style={styles.register}
              text='Register'
              type='secondary'
              onPress={this.handleRegister}
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
    backgroundColor: "#2c3e50"
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
    color: '#2980b6',
  },
  input: {
    height: 40,
    backgroundColor: 'rgba(225,225,225,0.2)',
    marginBottom: 10,
    padding: 10,
    borderRadius: 2,
    color: '#fff'
  },
  login: {
    marginBottom: 10,
  },
  register: {
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(LoginScreen);
