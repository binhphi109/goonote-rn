import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts } from '../Themes'
import moment from 'moment';

export default class NoteDetailsScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Note details',
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 10, padding: 10 }} onPress={() => navigation.goBack()}>
        <Icon
          name='chevron-left'
          size={24}
        />
      </TouchableOpacity>
    )
  });

  render () {
    const note = this.props.navigation.getParam('note', {})

    return (
      <View style={styles.root}>
        <ScrollView style={styles.container}>
          <View style={styles.sectionHeader}>
            <Text style={styles.title}>{note.title}</Text>
          </View>
          <View style={styles.sectionContent}>
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
  sectionHeader: {
    padding: 16,
    backgroundColor: '#F1F1F1',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey'
  },
  title: {
    fontSize: 18
  },
  sectionContent: {
    padding: 16

  },
  sectionMeta: {
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 16,
  },
  text: {
  }
})
