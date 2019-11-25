import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts } from '../Themes'
import moment from 'moment';
import Devider from '../Components/Drawer/Devider';

export default class NoteDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Note details',
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 10, padding: 10 }} 
        onPress={() => navigation.goBack()}>
        <Icon
          name='chevron-left'
          size={24}
        />
      </TouchableOpacity>
    ),
    headerRight: (
      <TouchableOpacity style={{ marginLeft: 10, padding: 10 }} 
        onPress={() => navigation.push('NoteEditor', { new: false, note: navigation.getParam('note') })}>
        <Text>Edit</Text>
      </TouchableOpacity>
    )
  });

  render () {
    const note = this.props.navigation.getParam('note', {})

    return (
      <View style={styles.root}>
        <ScrollView style={styles.container}>
          <View style={styles.sectionContent}>
            <Text style={styles.title}>
              {note.title}
            </Text>
            <Devider />
            <Text style={styles.subtitle}>
              {moment(note.created).format('DD/MM/YYYY   hh:mm')}
            </Text>
            <Text style={styles.text}>
              {note.content}
            </Text>
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
  container: {
    flex: 1,
    backgroundColor: Colors.transparent
  },
  section: {
  },
  sectionContent: {
    padding: 16
  },
  title: {
    fontSize: 20,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  sectionMeta: {
  },
  subtitle: {
    fontSize: 10,
    color: 'grey'
  },
  text: {
    marginTop: 16,
  }
})
