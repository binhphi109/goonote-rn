import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators, compose } from 'redux';
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, StyleSheet} from 'react-native'
import _ from 'lodash/fp'
import { Images, Metrics, Colors, Fonts } from '../Themes'
import Button from '../Components/Button/Button'
import { setToPath } from '../Lib/Utils/JsonUtils'
import UserActions from '../Redux/UserRedux'
import ButtonText from '../Components/Button/ButtonText';

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
    const { item } = this.state

    return (
      <KeyboardAvoidingView style={styles.containerView} behavior='padding'>

        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <Text style={styles.logoText}>goonote</Text>
            <TextInput
              placeholder='Username'
              style={styles.input}
              value={item.username}
              autoCapitalize='none'
              selectionColor={Colors.secondary}
              onChangeText={text => this.handleChange('username', text)}
              />
            <TextInput
              placeholder='Password'
              style={styles.input}
              value={item.password}
              autoCapitalize='none'
              selectionColor={Colors.secondary}
              onChangeText={text => this.handleChange('password', text)}
              secureTextEntry
              />
            <Button
              style={styles.login}
              text='Login'
              type='primary'
              onPress={this.handleLogin}
            />
            <ButtonText
              style={styles.register}
              text="Don't have an account?"
              color={Colors.secondary}
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
    padding: Metrics.paddingMedium,
    backgroundColor: Colors.primary,
  },
  logoText: {
    ...Fonts.style.logo,
    marginTop: 150,
    marginBottom: 50,
    textAlign: 'center',
    color: Colors.secondary
  },
  input: {
    fontSize: Fonts.size.input,
    height: 40,
    color: Colors.white,
    backgroundColor: Colors.primaryLight,
    marginBottom: Metrics.marginBase,
    padding: Metrics.paddingBase,
    borderRadius: Metrics.borderRadius,
  },
  login: {
    marginTop: Metrics.marginMedium,
    marginBottom: Metrics.marginLarge,
  },
  register: {
    alignItems: 'center',
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(LoginScreen);
