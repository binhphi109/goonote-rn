import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, TouchableHighlight, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts } from '../Themes/'
import moment from 'moment'

export default class HomeScreen extends Component {
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

  handleNotePress = (note) => {
    this.props.navigation.push('NoteDetails', { note })
  }

  render () {
    const {} = this.props;
    const notes = [{
      id: 1,
      title: "Note of day #1",
      created: new Date(),
      content: "This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.",
    },{
      id: 2,
      title: "Note of day #2",
      created: new Date("11/16/2019"),
      content: "This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.",
    },{
      id: 3,
      title: "Note of day #3",
      created: new Date("11/15/2019"),
      content: "This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.",
    }];

    return (
      <View style={styles.root}>
        <ScrollView style={styles.container}>

          {notes.map(note => 
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
