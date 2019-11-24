import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators, compose } from 'redux'
import { ScrollView, Text, Image, View, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import moment from 'moment'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts } from '../Themes/'
import { empty } from '../Lib/Utils/EmptyUtils'
import NoteActions, { NoteSelectors } from '../Redux/NoteRedux'

const mapStateToProps = (state) => ({
  notes: NoteSelectors.selectNotes(state)
})

const mapDispatchToProps = (dispatch) => bindActionCreators({
  getAllNotes: NoteActions.getAllNotes
}, dispatch)

class HomeScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 8, padding: 8 }} onPress={() => navigation.openDrawer()}>
        <Icon
          name='bars'
          size={24}
        />
      </TouchableOpacity>
    )
  })

  componentDidMount () {
    const { notes } = this.props

    // if (empty(notes)) {
      this.props.getAllNotes()
    // }
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
              underlayColor='#DFECF3'
              onPress={() => this.handleNotePress(note)}>
              <View style={styles.section} >
                <View style={styles.sectionHeader}>
                  <Text style={styles.title}>
                    {note.title}
                  </Text>
                  <Text style={styles.subtitle}>
                    Created {moment(note.created).fromNow()}
                  </Text>
                </View>
                <Text style={styles.text} numberOfLines={2}>
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
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  section: {
    padding: 16,
    borderBottomColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  sectionHeader: {
    marginBottom: 16
  },
  title: {
    fontWeight: 'bold'
  },
  subtitle: {
    fontSize: 12
  },
  text: {
  }
})

export default compose(
  connect(mapStateToProps, mapDispatchToProps)
)(HomeScreen)
