import React, { Component } from 'react'
import { ScrollView, Text, Image, View, TouchableOpacity, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Images, Metrics, Colors, Fonts } from '../Themes/'

export default class CreateNoteScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerLeft: (
      <TouchableOpacity style={{ marginLeft: 10, padding: 10 }} onPress={() => navigation.openDrawer()}>
        <Icon
          name='bars'
          size={24}
        />
      </TouchableOpacity>
    )
  });

  render () {

    return (
      <View style={styles.root}>
        <ScrollView style={styles.container}>

          <View style={styles.section} >
            <View style={styles.sectionHeader}>
              <Text style={styles.title}>
                Note of day #1
              </Text>
              <Text style={styles.subtitle}>
                5 min ago
              </Text>
            </View>
            <Text style={styles.sectionText}>
              This probably isn't what your app is going to look like. Unless your designer handed you this screen and, in that case, congrats! You're ready to ship. For everyone else, this is where you'll see a live preview of your fully functioning app using Ignite.
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
    padding: 16,
    borderBottomColor: Colors.grey,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  sectionHeader: {
    marginBottom: 16
  },
  title: {
    fontWeight: 'bold'
  },
  subtitle: {

  },
  sectionText: {
  },
  titleText: {
    fontSize: 12
  }
})
