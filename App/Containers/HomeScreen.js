import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { ScrollView, Text, Image, View, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts, AppStyles } from '../Themes/'
import { empty } from '../Lib/Utils/EmptyUtils'
import NoteActions, { NoteSelectors } from '../Redux/NoteRedux'
import ButtonIcon from '../Components/Button/ButtonIcon'

const mapStateToProps = (state) => ({
  notes: NoteSelectors.selectNotes(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllNotes: NoteActions.getAllNotes
}, dispatch)

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerStyle: AppStyles.navigationHeader,
    headerTintColor: Colors.secondary,
    headerLeft: (
      <ButtonIcon
        style={styles.navigationLeft} 
        icon='bars' 
        color={Colors.primary}
        iconSize={Metrics.icons.base}
        onPress={() => navigation.openDrawer()}
        />
    ),
    headerRight: (
      <ButtonIcon
        style={styles.navigationRight} 
        icon='edit' 
        color={Colors.primary}
        iconSize={Metrics.icons.base}
        onPress={() => navigation.push('NoteEditor', { new: true })}
        />
    )
  })

  componentDidMount () {
    this.props.getAllNotes()
  }

  handleNotePress = (note) => {
    this.props.navigation.push('NoteDetails', { note })
  }

  render () {
    const { notes } = this.props

    return (
      <View style={styles.root}>
        <ScrollView style={styles.container}>

          {notes && notes.map(note => 
            <TouchableHighlight key={note.id}
              underlayColor={Colors.lightgreyUnderlay}
              onPress={() => this.handleNotePress(note)}>
              <View style={styles.section}>
                <View style={styles.sectionHeader}>
                  <Text style={styles.title}>
                    {note.title}
                  </Text>
                  <Text style={styles.subtitle}>
                    Created {moment(note.created).fromNow()}
                  </Text>
                </View>
                <Text style={styles.text} 
                  numberOfLines={2}
                  ellipsizeMode='tail'
                  >
                  {note.content}
                </Text>
              </View>
            </TouchableHighlight>
          )}

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
    padding: Metrics.paddingMedium,
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  sectionHeader: {
    marginBottom: Metrics.marginMedium
  },
  title: {
    color: Colors.secondary,
    fontSize: Fonts.size.large,
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: Fonts.size.small,
    color: Colors.grey,
  },
  text: {
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeScreen)
