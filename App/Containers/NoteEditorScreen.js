import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import _ from 'lodash/fp'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts, AppStyles } from '../Themes'
import { setToPath } from '../Lib/Utils/JsonUtils'
import NoteActions from '../Redux/NoteRedux'
import Devider from '../Components/Drawer/Devider'
import { empty } from '../Lib/Utils/EmptyUtils'
import ButtonText from '../Components/Button/ButtonText'

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createNote: NoteActions.createNote
}, dispatch)

const initialState = {
  item: {
    title: null,
    content: null,
    created: new Date()
  },
  dirty: false
}

class NoteEditorScreen extends Component {
  txtContent = React.createRef()
  new = false

  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('new') ? 'Create Note' : 'Edit Note',
    headerStyle: AppStyles.navigationHeader,
    headerTintColor: Colors.secondary,
    headerLeft: (
      <ButtonText 
        style={styles.navigationLeft} 
        text='Cancel' 
        color={Colors.primary}
        onPress={navigation.getParam('handleBack')}
        />
    ),
    headerRight: (
      <ButtonText 
        style={styles.navigationRight} 
        text='Save' 
        color={Colors.primary}
        textBold
        onPress={navigation.getParam('handleSave')}
        />
    )
  });

  constructor (props) {
    super(props)

    const note = this.props.navigation.getParam('note')
    this.new = this.props.navigation.getParam('new')

    this.state = {
      item: {
        ...initialState,
        ...note
      }
    }

    this.props.navigation.setParams({ 
      handleBack: this.handleBack,
      handleSave: this.handleSave
    })
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

  handleFocus = () => {
    this.txtContent.current.focus()
  }

  handleSave = () => {
    const { item } = this.state

    if (this.new) {
      this.props.createNote(item).then((result) => {
        this.reset()
        this.props.navigation.navigate('Home')
      }).catch(error => {
        alert('Cannot create')
      })
    }
  }

  handleBack = () => {
    this.props.navigation.goBack()
  }

  reset = () => {
    this.setState({
      ...initialState
    })
  }

  render () {
    const { item } = this.state

    return (
      <View style={styles.root}>
        <ScrollView style={styles.container} onTouchStart={this.handleFocus}>
          <View style={styles.sectionContent}>
            <TextInput
              style={styles.title} 
              placeholder='Title'
              value={item.title}
              autoFocus
              selectionColor={Colors.secondary}
              onChangeText={text => this.handleChange('title', text)}
              />
            <Devider />
            <Text style={styles.subtitle}>
              {moment(item.created).format('DD/MM/YYYY   hh:mm')}
            </Text>
            <TextInput
              ref={this.txtContent}
              style={styles.text}
              placeholder="What's on your mind?"
              value={item.content}
              multiline
              selectionColor={Colors.black}
              onChangeText={text => this.handleChange('content', text)}
              />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  root: {
    flex: 1
  },
  navigationLeft: { 
    marginLeft: Metrics.marginBase, 
    padding: Metrics.paddingBase 
  },
  navigationRight: { 
    marginRight: Metrics.marginBase, 
    padding: Metrics.paddingBase,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  section: {
  },
  sectionHeader: {
    padding: Metrics.paddingMedium,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: Colors.grey
  },
  title: {
    color: Colors.secondary,
    fontSize: Fonts.size.h5,
    marginBottom: Metrics.marginSmall,
    fontWeight: 'bold'
  },
  sectionContent: {
    padding: Metrics.paddingMedium
  },
  sectionMeta: {
  },
  subtitle: {
    fontSize: Fonts.size.small,
    color: Colors.grey
  },
  text: {
    marginTop: Metrics.marginMedium,
    fontSize: Fonts.size.regular
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
)(NoteEditorScreen);
